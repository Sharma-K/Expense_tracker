// import ExpenseItem from "./ExpenseItem";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
const Expenses =(props)=>{

const [filterYear, setFilterYear ] = React.useState('2020');


  const  onDropdownChangeHandler = (year) => {
    
    setFilterYear(year);
  }

  const filteredExpenses = props.expense.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

    return(
    
        <Card className="expenses">
        <ExpensesFilter 
        selected={filterYear} 
        onDropdownChange={onDropdownChangeHandler}
         />
        
        <ExpensesList items= {filteredExpenses} />

        </Card>
        
    )
}

export default Expenses;