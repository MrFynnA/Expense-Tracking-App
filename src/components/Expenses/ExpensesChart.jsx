import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart=(props)=>{
    const expenses=props.expenses

    const chartItems=[
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
]

for(const expenseItems of expenses){
   const expenseMonth=expenseItems.date.getMonth()//Starting from 0 january is 0
    chartItems[expenseMonth].value+=expenseItems.amount
}
      
    return(
        <Chart chartItems={chartItems}/>
    )
}

export default ExpensesChart;