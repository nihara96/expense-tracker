import React from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; 

function Expenses(props) {
  return (
    <>
    <Card className="expenses">
      {props.expenses.map((data) => {
        return (
          <ExpenseItem
            date={data.date}
            title={data.title}
            amount={data.amount}
          />
        );
      })}
    </Card>
    </>
  );
}

export default Expenses;
