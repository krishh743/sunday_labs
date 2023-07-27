import React, {useState} from "react";
import "./TablePage.css";
import {Stack} from "@mui/material";

interface Account {
  account_name: string;
  current: string;
  previous: string;
  children_total_current?: string;
  children_total_previous?: string;
  children?: Record<string, Account>;
}

interface AccountTableProps {
  data: Record<string, Account>;
  level?: number;
  expandedAccounts: string[];
  toggleExpand: (accountId: string) => void;
}

const AccountTable: React.FC<AccountTableProps> = ({
  data,
  level = 0,
  expandedAccounts,
  toggleExpand,
}) => {
  return (
    <div className="table-data">    
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Current</th>
            <th>Previous</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((accountId) => {
            const account = data[accountId];
            const isExpanded = expandedAccounts.includes(accountId);

            return (
              <React.Fragment key={accountId}>
                <tr style={{paddingLeft: level * 20}}>
                  <td
                    style={{cursor: "pointer"}}
                    onClick={() => toggleExpand(accountId)}
                  >
                    {account.account_name}
                  </td>
                  <td>
                    {isExpanded
                      ? account.current
                      : account.children_total_current}
                  </td>
                  <td>
                    {isExpanded
                      ? account.previous
                      : account.children_total_previous}
                  </td>
                </tr>
                {isExpanded && account.children && (
                  <AccountTable
                    data={account.children}
                    level={level + 1}
                    expandedAccounts={expandedAccounts}
                    toggleExpand={toggleExpand}
                  />
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
