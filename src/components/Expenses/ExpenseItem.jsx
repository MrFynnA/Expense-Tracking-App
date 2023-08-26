import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import {useDispatch,useSelector} from 'react-redux'
import { uiAction } from '../expenseStore/expenseStore';
import { CheckIcon } from '../UI/icons';
import { CloseIcon } from '../UI/icons';




const ExpenseItem=(props)=>{
    const dispatch= useDispatch()
    const displayState=useSelector(state=>state.uiState.uiChange)
    const expenseID=useSelector(state=>state.uiState.expenseItemId)
    const title=props.expenseTitle
    const amount=props.expenseAmount
    const date=props.expenseDate
    const expenseId=props.expenseId

    console.log(expenseID)

const deleteHandle=()=>{
          props.expenseDel(expenseId)
}
const ondisplayEdit=()=>{
    console.log(expenseId)
    dispatch(uiAction.onexpenseEdit(expenseId))
}

let expenseDisplay=<span className='expenseTitle'>{title}</span>
if(displayState && expenseID===expenseId){
    expenseDisplay=<span className='expense_inputUP'><input type='text'></input><span className='checkIC'><CheckIcon/><CloseIcon/></span></span>
}



return(
<>
    <Card className='expense-item'>
    
       <ExpenseDate expenseDate={date}/>
        <div className='expense-item__description'>
<h2 onDoubleClick={ondisplayEdit}>{expenseDisplay}</h2>
<div className='expense-item__price'>${amount}</div>
<button  style={{backgroundColor:'#f56f3b'}} onClick={deleteHandle}><span style={{color:'white'}}>—</span></button>
        </div>
 
    </Card>
    </>
)
    
}
export default ExpenseItem;