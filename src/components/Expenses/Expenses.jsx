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
        <Card className='bg-[goldenrod]'>
        <ExpenseFilter valueOfYear={year} onSelectedYear={getYear}/>
        <ExpensesChart expenses={filteredExpenses} />
    <ExpenseList filteredExpense={filteredExpenses} expenseDelete={props.deleteExpense} />
    <div className='totalExpense'>

<div className='font-bold !text-lg flex gap-2 justify-center'>
    <div>Total Expenses:</div>
    <div>${totalExpense.toLocaleString()}</div>
</div>
  
    </div>
      </Card> 
     )
}

export default Expenses;