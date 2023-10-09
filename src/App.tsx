import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './home-page/HomePage';
import {Route, Routes} from 'react-router';
import TablePage from './components/table-page/TablePage';
import {jsonData} from './data-file/Data';
import GraphPage from './components/graph-page/GraphPage';
import PDFViewer from './pdf-reader/PdfReader';

interface Account {
  account_name: string;
  current: string;
  previous: string;
  children_total_current?: string;
  children_total_previous?: string;
  children?: Record<string, Account>;
}

function App() {
const initialExpandedAccounts: string[] = []; // Initially no accounts are expanded
const [expandedAccounts, setExpandedAccounts] = useState<string[]>(
  initialExpandedAccounts
);
const toggleExpand = (accountId: string) => {
  if (expandedAccounts.includes(accountId)) {
    setExpandedAccounts((prev) => prev.filter((id) => id !== accountId));
  } else {
    setExpandedAccounts((prev) => [...prev, accountId]);
  }
};
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/table"
          element={
            <TablePage
              data={jsonData}
              expandedAccounts={expandedAccounts}
              toggleExpand={toggleExpand}
            />
          }
        ></Route>
        <Route path="/graph" element={<GraphPage />}></Route>
        <Route path='/pdf' element={<PDFViewer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
