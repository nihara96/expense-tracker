import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onSelectYear={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/> 
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </>
  );
}

export default Expenses;
