import React from 'react'; 
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'; 





const NewExpense=(props)=>{
    
    const onSaveData=(incomeData)=>{
        const newData={
            id:Math.random().toString(),
            ...incomeData
        }
     props.onReceiveData(newData)
    }

    return <div className='new-expense'>
<ExpenseForm onSaveDataHandler={onSaveData}/>
    </div>
}

export default NewExpense;