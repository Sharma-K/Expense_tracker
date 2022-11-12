import React from 'react'
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ExpensesFilter from './components/Expenses/ExpenseFilter';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
 
  const [array, setArray] = React.useState(dummy_expenses);

  
  const addExpenseHandler = (newExpense) => {
    
    // setArray([...dummy_expenses, newExpense]);

    setArray(prev =>{
      return [...prev, newExpense];
    })
    
   
  }
  return (
    <div>
   < NewExpense addExpense={addExpenseHandler} />
   
    <Expenses expense={array}/>
    </div>
  );
}

export default App;
