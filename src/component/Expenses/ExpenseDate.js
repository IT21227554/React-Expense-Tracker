import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className='expense-date'>
      <div className='expense__month'>{month}</div>
      <div className='expense__year'>{year}</div>
      <div className='expense__date'>{date}</div>
    </div>
  );
};

export default ExpenseDate;
