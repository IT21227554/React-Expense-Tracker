import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const value = props.dataPoints.map((data) => data.value);
  const max = Math.max(...value);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          data={dataPoint.value}
          maxValue={max}
          month={dataPoint.month}
        />
      ))}
    </div>
  );
};
export default Chart;
