import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

    const enteredDataHandler = (enteredExpense) =>{
     const newExpenses = {
        ...enteredExpense,
        id: Math.random().toString()
     }
    //  console.log(newExpenses);
    props.addExpense(newExpenses);
    }

    return (
        <div className="new-expense">
         <ExpenseForm getEnteredData={enteredDataHandler} />
        </div>
    )

};

export default NewExpense;
