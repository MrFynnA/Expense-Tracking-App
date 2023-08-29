import React,{useState,useEffect} from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card.jsx'
import ExpenseFilter from './ExpenseFilter';
import './ExpenseFilter.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import { useSelector } from 'react-redux';
import { expenseAction } from '../expenseStore/expenseStore';


const Expenses=props=>{
     const expenseData=useSelector(state=>state.expenseState.expenseItems)

     const[year, setYear]=useState('2023')
   
     const getYear=(receivedYear)=>{
       setYear(receivedYear)
    }
 
   const filteredExpenses= expenseData.filter((expenses)=>year===expenses.date.getFullYear().toString())
   const totalExpense=filteredExpenses.reduce((a,items)=>a+ +items.amount,0)
  

  
     return(
        <Card className='expenses-contain'>
        <ExpenseFilter valueOfYear={year} onSelectedYear={getYear}/>
        <ExpensesChart expenses={filteredExpenses} />
    <ExpenseList filteredExpense={filteredExpenses} expenseDelete={props.deleteExpense} />
    <div className='totalExpense'>

    <h1>Total Expenses:</h1>
    <h1>${totalExpense.toLocaleString()}</h1>
    </div>
      </Card> 
     )
}

export default Expenses;