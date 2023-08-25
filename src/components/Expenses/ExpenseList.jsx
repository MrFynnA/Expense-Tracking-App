import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'



const ExpenseList=(props)=>{
    
    let display=<h3 className="expenses-list__fallback">No Expenses Found</h3>

if (props.filteredExpense.length > 0){
      display=props.filteredExpense.map((expenses)=><ExpenseItem
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