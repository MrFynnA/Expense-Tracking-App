import React from "react"
import './ExpenseDate.css'


const ExpenseDate=(props)=>{
    const day=props.expenseDate.toLocaleString('en-US',{day:'2-digit'})
     const month=props.expenseDate.toLocaleString('en-US',{month:'long'})
     const year=props.expenseDate.getFullYear()
    return(
        <div className="max-md:!w-full">
        <div className={`expense-date max-md:!w-full max-md:!flex max-md:flex-row max-md:justify-between max-md:px-2`}>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
        </div>
        </div>

    )
}
export default ExpenseDate;