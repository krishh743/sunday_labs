export const jsonData = {
  "1010": {
    account_name: "Advertising And Marketing",
    current: "5,000",
    previous: "3,200",
    children_total_current: "8,500",
    children_total_previous: "4,000",
    children: {
      "1011": {
        account_name: "Offline Marketing",
        current: "2,000",
        previous: "500",
      },
      "1012": {
        account_name: "Online Marketing",
        current: "1,500",
        previous: "300",
      },
    },
  },
  "1020": {
    account_name: "Bank Fees",
    current: "750",
    previous: "800",
  },
  "1030": {
    account_name: "IT and Internet Expenses",
    current: "10,000",
    previous: "5,500",
    children_total_current: "11,500",
    children_total_previous: "6,000",
    children: {
      "1031": {
        account_name: "Internet Expenses",
        current: "0",
        previous: "0",
        children_total_current: "1,500",
        children_total_previous: "500",
        children: {
          "10311": {
            account_name: "Airtel",
            current: "0",
            previous: "500",
            children_total_current: "1,500",
            children_total_previous: "500",
            children: {
              "103111": {
                account_name: "Xtreme Fiber",
                current: "1,500",
                previous: "0",
              },
            },
          },
        },
      },
    },
  },
};

export const monthlyData = {
  title: "Monthly Sales Performance",
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  data: [15000, 8000, 4500, 11000, 2000, 9500],
};

export const quarterlyData = {
  title: "Sales Performance",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  data: [15000, 8000, 4500, 11000],
};

export const pieChartDat = () => {
  // Calculate the total sales across all months and quarters
  const totalSales = [...monthlyData.data, ...quarterlyData.data].reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Calculate the percentage of each data point
  const monthlyPercentage = (monthlyData.data.reduce(
    (acc, curr) => acc + curr,
    0
  ) /
    totalSales) *
    100;

  const quarterlyPercentage = (quarterlyData.data.reduce(
    (acc, curr) => acc + curr,
    0
  ) /
    totalSales) *
    100;

  // Create the pie chart data
  const pieChartData = [
    { name: "Monthly Sales", value: monthlyPercentage, color: "#FF5733" },
    { name: "Quarterly Sales", value: quarterlyPercentage, color: "#33FF57" },
  ];

  return pieChartData;
};
