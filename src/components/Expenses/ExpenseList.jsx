import React,{useEffect} from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
import { expenseAction } from '../expenseStore/expenseStore';
import {useSelector,useDispatch} from 'react-redux'



const ExpenseList=(props)=>{
    
    const dispatch=useDispatch()
    const expenseItemsFrmStore=useSelector(state=>state.expenseState.expenseItems)
    let display=<h3 className="expenses-list__fallback">No Expenses Found</h3>
    // const expenseItems=props.filteredExpense.map(items=>{
    //     return{
    //         id:items.id,
    //         title:items.title,
    //         amount:items.amount
    //     }
    // })
    useEffect(()=>{
        dispatch(expenseAction.onGetUpdatedItems(props.filteredExpense))

    },[props.filteredExpense])


// const newExpenseUpdate=expenseItemsFrmStore.map(items=>{
//     return{
//         id:items.id,
//         title:items.title,
//         amount:items.amount,
   
//     }
// })
// console.log(newExpenseUpdate)

    // console.log(expenseItemsFrmStore)

if (expenseItemsFrmStore.length > 0){
      display=expenseItemsFrmStore.map((expenses)=><ExpenseItem
      key={expenses.id}
      expenseId={expenses.id}
      expenseTitle={expenses.title}
      expenseAmount={expenses.amount}
     expenseDate={expenses.date}
     expenseDel={props.expenseDelete}
      />)
}


return(
    <div>
    {display}
    </div>
)
}

export default ExpenseList