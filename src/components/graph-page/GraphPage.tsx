import React, {useState} from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";
import "./GraphPage.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Tabs} from "@mui/material";
import {monthlyData, quarterlyData} from "../../data-file/Data";

function GraphPage() {
  const [currentTab, setCurrentTab] = useState<"monthly" | "quarterly">(
    "monthly"
  );

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: "monthly" | "quarterly"
  ) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
      <Box sx={{width: "100%",display:"flex", justifyContent: "center",marginBlock:"20px"}}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Monthly" value="monthly" />
          <Tab label="Quarterly" value="quarterly" />
        </Tabs>
      </Box>
      {currentTab === "monthly" ? (
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={monthlyData.data.map((value, index) => ({
              name: monthlyData.labels[index],
              sales: value,
            }))}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="sales" name="Sales Amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={quarterlyData.data.map((value, index) => ({
              name: quarterlyData.labels[index],
              sales: value,
            }))}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" name="Sales Amount" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default GraphPage;
