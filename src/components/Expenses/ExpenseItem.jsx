import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';




const ExpenseItem=(props)=>{
    const title=props.expenseTitle
    const amount=props.expenseAmount
    const date=props.expenseDate
    const expenseId=props.expenseId

const deleteHandle=()=>{
          props.expenseDel(expenseId)
}


return(
<>
    <Card className='expense-item'>
       
       <ExpenseDate expenseDate={date}/>
        <div className='expense-item__description'>
<h2>{title}</h2>
<div className='expense-item__price'>${amount}</div>
<button  style={{backgroundColor:'#f56f3b'}} onClick={deleteHandle}><span style={{color:'white'}}>-</span></button>
        </div>
 
    </Card>
    </>
)
    
}
export default ExpenseItem;