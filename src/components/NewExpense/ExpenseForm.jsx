import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {



    const [userInput, setUserInput] = React.useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                title: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                amount: event.target.value
            }
        })
    }


    const dateChangeHandler = (event) => {
        setUserInput((prev) => {
            return {
                ...prev,
                date: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        };
        // console.log(expenseData);
        props.getEnteredData(expenseData);
        setUserInput((prev) => {
            return {
                ...prev,
                date: '',
                amount: '',
                title: ''
            }
        })
    }

  
   

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={userInput.title}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                        name=""
                        id=""
                        value={userInput.amount}
                        min="0.01" step="0.01"
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date"
                        name=""
                        id=""
                        min="2019-01-01" max="2022-12-31"
                        value={userInput.date}
                        onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;
