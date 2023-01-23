import Chart from "../Chart/Chart";
const ExpensesChartBar = (props) => {
  const chartData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const element of props.expenses) {
    const month = element.date.getMonth();
    chartData[month].value += element.amount;
  }

  return <Chart dataPoints={chartData} />;
};

export default ExpensesChartBar;
