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

    const newItem={
        id:expenseId,
        title:newTitle,
        amount:amount,
        date:date
    }
//deleting Expense Item
const deleteHandle=()=>{
          props.expenseDel(expenseId)
}
//on editting expense Item Title
const ondisplayEdit=()=>{
    console.log(expenseId)
    dispatch(uiAction.onexpenseEdit(expenseId))
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
        setError('please enter title*')
     return
    }
dispatch(expenseAction.onUpdateExpenseItem(newItem))
dispatch(uiAction.oneexpenseCloseEdit())
}


let expenseDisplay=<span  onClick={ondisplayEdit} className='expenseTitle'>{title}</span>
if(displayState && expenseID===expenseId){
    expenseDisplay=<span className='expense_inputUP'><input onChange={onGetNewTitle} type='text' placeholder={`${error}`} value={newTitle}></input><span className='checkIC'><CheckIcon onSet={onSetNewTitle}/><CloseIcon onClick={onClose}/></span></span>
}

//not leaving field empty after click on new title for edit
useEffect(()=>{
    if(expenseID!==expenseId){
        setNewTitle(title)
        }
},[expenseID])




return(
<>
    <Card className='expense-item'>
    
       <ExpenseDate expenseDate={date}/>
        <div className='expense-item__description'>
<h2>{expenseDisplay}</h2>
<div className='expense-item__price'>${amount}</div>
<button  style={{backgroundColor:'#f56f3b'}} onClick={deleteHandle}><span style={{color:'white'}}>—</span></button>
        </div>
 
    </Card>
    </>
)
    
}
export default ExpenseItem;