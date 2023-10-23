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

    return <div className={`new-expense w-full bg-[#2f2061] p-10 rounded-md`}>
<ExpenseForm onSaveDataHandler={onSaveData}/>
    </div>
}

export default NewExpense;