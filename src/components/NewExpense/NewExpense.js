import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) { 

  const [isClicked, setIsClicked] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsClicked(false); 

    console.log(expenseData);
  };

  const onClickHandler = () => {
    setIsClicked(true);
  };

  const onCancelClickHandler = (value)=>{
    setIsClicked(value); 
  }

  if (isClicked) {
    return (
      <>
        <div className="new-expense">
          <ExpenseForm onCancelClickHandler={onCancelClickHandler} onSaveExpenseData={saveExpenseDateHandler} />
        </div>
      </>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={onClickHandler}>Add New Expense</button>
    </div>
  );
}

export default NewExpense;
