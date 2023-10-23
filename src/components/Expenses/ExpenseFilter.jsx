import React,{useState,useRef} from 'react';

const ExpenseFilter=(props)=>{
    const years=useRef()
    const onGetYear=()=>{
        props.onSelectedYear(years.current.value);
    }
   
    
       const yearValue=props.valueOfYear

    return(
<div className='flex justify-between'>
               <div className='text-lg max-md:text-md font-extrabold'>
                    <label>Select Year</label>
               </div>
               <div className='cursor-pointer'>
    <select className='px-4 py-1 mb-2 !cursor-pointer outline-none rounded-md font-mono' value={yearValue} onChange={onGetYear} ref={years}>
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