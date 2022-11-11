// import ExpenseItem from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
const Expenses =(props)=>{
    return(
        <Card className="expenses">
            {props.expense.map((item)=>(
            <ExpenseItem title={item.title} date={item.date} amount={item.amount}/>
           ))}
        </Card>
    )
}

export default Expenses;