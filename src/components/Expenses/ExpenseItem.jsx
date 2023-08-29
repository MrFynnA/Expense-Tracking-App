import React,{useEffect, useState} from 'react';
import './ExpenseItem.css';
import './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import {useDispatch,useSelector} from 'react-redux'
import { uiAction } from '../expenseStore/expenseStore';
import { CheckIcon } from '../UI/icons';
import { CloseIcon } from '../UI/icons';
import { expenseAction } from '../expenseStore/expenseStore';





const ExpenseItem=(props)=>{
    const dispatch= useDispatch()
    const[error,setError]=useState('')
    const displayState=useSelector(state=>state.uiState.uiChange)
    const expenseID=useSelector(state=>state.uiState.expenseItemId)
    const title=props.expenseTitle
    const amount=props.expenseAmount
    const date=props.expenseDate
    const expenseId=props.expenseId
    const[newTitle,setNewTitle]=useState(title)
    const[newAmount,setNewAmount]=useState(amount)
    const[input,setInput]=useState(null)


    const newItem={
        id:expenseId,
        title:newTitle,
        amount:newAmount,
        date:date
    }
//deleting Expense Item
const deleteHandle=()=>{
          props.expenseDel(expenseId)
}
//on editting expense Item Title
const ondisplayEditTitle=()=>{

    dispatch(uiAction.onexpenseEdit(expenseId))
    setInput('title')
}
//on close expense edit
const onClose=()=>{
    dispatch(uiAction.oneexpenseCloseEdit())
    setNewTitle(title)
}
//on getting new expense item title
const onGetNewTitle=(event)=>{
    setNewTitle(event.target.value)
    setError('')
}
//setting new expense item title
const onSetNewTitle=()=>{
    if(newTitle.trim()===''){
        setError('enter title*')
     return
    }
dispatch(expenseAction.onUpdateExpenseItem(newItem))
dispatch(uiAction.oneexpenseCloseEdit())
}
//for amount
const onGetNewAmount=(event)=>{
    setNewAmount(event.target.value)
    setError('')
}
const onSetNewAmount=()=>{
    if(newAmount.trim()===' '){
        setError('enter amount*')
     return
    }

  
dispatch(expenseAction.onupdateExpenseAmount(newItem))
dispatch(uiAction.oneexpenseCloseEdit())
}
const ondisplayEditAmount=()=>{

    dispatch(uiAction.onexpenseEdit(expenseId))
    setInput('amount')
}

let expenseTitleDisplay=<span  onClick={ondisplayEditTitle} className='expenseTitleOrAmount'>{title}</span>
const titleCondition=displayState && expenseID===expenseId && input==='title'
if(titleCondition){
    expenseTitleDisplay=<span className='expense_input_title'><input onChange={onGetNewTitle} type='text' placeholder={`${error}`} value={newTitle}></input><span className='checkIC'><CheckIcon onSet={onSetNewTitle}/><CloseIcon onClick={onClose}/></span></span>
}

let expenseAmountDisplay=<span onClick={ondisplayEditAmount} className='expenseTitleOrAmount'>{`$${amount}`}</span>
const amountCondition=displayState && expenseID===expenseId && input==='amount'
if(amountCondition){
    expenseAmountDisplay=<span className='expense_input_amount'><input onChange={onGetNewAmount} type='number' placeholder={`${error}`} value={newAmount}></input></span>
}

//not leaving field empty after click on new title for edit
useEffect(()=>{
    if(expenseID!==expenseId){
        setNewTitle(title)
        }
},[expenseID])
useEffect(()=>{
    if(expenseID!==expenseId){
        setNewAmount(amount)
        }
},[expenseID])




return(
<>
    <Card className='expense-item'>
    
       <ExpenseDate expenseDate={date}/>
        <div className='expense-item__description'>
<h2>{expenseTitleDisplay}</h2>
<div className={`${'expense-item__price'} ${amountCondition &&'expense_amountContainer_shift'}`}>{expenseAmountDisplay}</div>{amountCondition && <span className='checkIC'><CheckIcon onSet={onSetNewAmount}/><CloseIcon onClick={onClose}/></span>}
<button  style={{backgroundColor:'#f56f3b'}} onClick={deleteHandle}><span style={{color:'white'}}>—</span></button>
        </div>
 
    </Card>
    </>
)
    
}
export default ExpenseItem;