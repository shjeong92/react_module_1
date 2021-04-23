import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems(props) {
  console.log(props.expenses);
  const expenses = props.expenses.map(({ title, amount, date }) => {
    return <ExpenseItem title={title} amount={amount} date={date} />;
  });
  return <div>{expenses}</div>;
}

export default ExpenseItems;
