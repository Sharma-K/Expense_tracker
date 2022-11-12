// import ExpenseItem from "./ExpenseItem";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
const Expenses =(props)=>{

const [filterYear, setFilterYear ] = React.useState('2020');


  const  onDropdownChangeHandler = (year) => {
    
    setFilterYear(year);
  }

    return(
    
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onDropdownChange={onDropdownChangeHandler} />
            {props.expense.map((item)=>(

            <ExpenseItem title={item.title} date={item.date} amount={item.amount}/>
           ))}
        </Card>
        
    )
}

export default Expenses;