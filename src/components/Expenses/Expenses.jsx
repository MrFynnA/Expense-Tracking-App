import React,{useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card.jsx'
import ExpenseFilter from './ExpenseFilter';
import './ExpenseFilter.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


const Expenses=props=>{
     const expenseItems=props.expenses

     const[year, setYear]=useState('2023')
   
     const getYear=(receivedYear)=>{
       setYear(receivedYear)
    }
   const filteredExpenses= expenseItems.filter((expenses)=>year===expenses.date.getFullYear().toString())



     return(
        <Card className='expenses-contain'>
        <ExpenseFilter valueOfYear={year} onSelectedYear={getYear}/>
        <ExpensesChart expenses={filteredExpenses} />
    <ExpenseList filteredExpense={filteredExpenses} expenseDelete={props.deleteExpense} />
      </Card> 
     )
}

export default Expenses;