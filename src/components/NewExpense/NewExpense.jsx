import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = React.useState(false);

    const enteredDataHandler = (enteredExpense) =>{
     const newExpenses = {
        ...enteredExpense,
        id: Math.random().toString()
     }
    //  console.log(newExpenses);
    props.addExpense(newExpenses);
    setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
         {isEditing && <ExpenseForm getEnteredData={enteredDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )

};

export default NewExpense;
