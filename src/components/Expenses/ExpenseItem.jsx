import React,{useState} from 'react';
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

const deleteHandle=()=>{
          props.expenseDel(expenseId)
}
const ondisplayEdit=()=>{
    console.log(expenseId)
    dispatch(uiAction.onexpenseEdit(expenseId))
}
const onClose=()=>{
    dispatch(uiAction.oneexpenseCloseEdit())
    setNewTitle(title)
}
const onGetNewTitle=(event)=>{
    setNewTitle(event.target.value)
}
const onSetNewTitle=()=>{
dispatch(expenseAction.onUpdateExpenseItem(newItem))
dispatch(uiAction.oneexpenseCloseEdit())
}


let expenseDisplay=<span  onClick={ondisplayEdit} className='expenseTitle'>{title}</span>
if(displayState && expenseID===expenseId){
    expenseDisplay=<span className='expense_inputUP'><input onChange={onGetNewTitle} type='text' value={newTitle}></input><span className='checkIC'><CheckIcon onSet={onSetNewTitle}/><CloseIcon onClick={onClose}/></span></span>
}



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