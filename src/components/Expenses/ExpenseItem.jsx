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
    if(newAmount.trim()===''){
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

let expenseTitleDisplay=<h2  onClick={ondisplayEditTitle} className='expenseTitleOrAmount font-extrabold text-white after:content-["click_to_edit_Title"] after:hidden after:text-[0.7rem] after:bg-black after:px-2 after:rounded-lg hover:after:block max-lg:after:!hidden after:font-[400] after:absolute after:bottom-20'>{title}</h2>
const titleCondition=displayState && expenseID===expenseId && input==='title'
if(titleCondition){
    expenseTitleDisplay=<span className='flex !w-[60%] max-md:!w-full gap-2 max-md:h-10 items-center'><input className='w-full px-1 rounded-lg outline-none md:py-2 max-md:py-1' onChange={onGetNewTitle} type='text' placeholder={`${error}`} value={newTitle}></input><span className='checkIC'><CheckIcon onSet={onSetNewTitle}/><CloseIcon onClick={onClose}/></span></span>
}

let expenseAmountDisplay=<span onClick={ondisplayEditAmount} className={`${'w-full bg-indigo-800 p-3 border-2 border-white rounded-lg after:content-["click_to_edit_Amount"] after:hidden after:text-[0.7rem] after:bg-black after:px-2 after:rounded-lg hover:after:block max-lg:after:!hidden after:font-[400] after:absolute after:bottom-20'} ${'amount_A'}`}>{`$${amount}`}</span>
const amountCondition=displayState && expenseID===expenseId && input==='amount'
if(amountCondition){
    expenseAmountDisplay=<span className='flex'><input className='w-full text-black md:py-2 max-md:py-1 px-1 rounded-lg outline-none' onChange={onGetNewAmount} type='number' placeholder={`${error}`} value={newAmount}></input>
    </span>
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
    <Card className='flex w-full justify-between items-center bg-[#4b4b4b] max-md:pt-0 my-5 max-md:flex-col max-md:gap-4'>
       <div className='flex items-center max-md:flex-col  md:gap-20 max-md:gap-8 w-full relative'>
       <ExpenseDate expenseDate={date}/>
       <div>
        <div>
{expenseTitleDisplay}
        </div>
       </div>
       </div>
<div className='flex items-center gap-20 mt-5 relative md:bottom-2'>
<div className='flex max-md:flex-col items-center gap-2'>
<div className='font-extrabold text-white'>{expenseAmountDisplay}</div>
{amountCondition && <span className='max-md:flex'><CheckIcon onSet={onSetNewAmount}/><CloseIcon onClick={onClose}/></span>}
</div>
<button className='after:content-["delete"] after:hidden after:text-[0.7rem] after:bg-black after:px-2 after:rounded-lg hover:after:block after:text-white max-lg:after:!hidden after:font-[400] after:absolute after:bottom-20'  style={{backgroundColor:'#f56f3b'}} onClick={deleteHandle}><span style={{color:'white'}}>—</span></button>
</div>
    
    </Card>
    </>
)
    
}
export default ExpenseItem;