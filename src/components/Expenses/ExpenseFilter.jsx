import React,{useState,useRef} from 'react';

const ExpenseFilter=(props)=>{
    const years=useRef()
    const onGetYear=()=>{
        props.onSelectedYear(years.current.value);
    }
   
    
       const yearValue=props.valueOfYear

    return(
<div className='expenses-filter__control'>
               <div className='expenses-filter'>
                    <label>Select Year</label>
               </div>
               <div className='expenses-filter'>
    <select value={yearValue} onChange={onGetYear} ref={years}>
<option>2019</option>
<option>2020</option>
<option>2021</option>
<option>2022</option>
<option>2023</option>
    </select>
    </div>
</div>
    )
}

export default ExpenseFilter;