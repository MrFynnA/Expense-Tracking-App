import React,{useState} from 'react'; 
import './ExpenseForm.css'; 
import ErrorModal from '../UI/ErrorModal';





const ExpenseForm=(props)=>{
    // const[title,setTitle]=useState('')
    // const[amount,setAmount]=useState('')
    // const[date,setDate]=useState('')
    const[userData,setFormDisplay]=useState(false)
    const[Error,SetError]=useState()
    // const[titleMessage,setMessageTitle]=useState('')
    // const[amountMessage,setMessageAmount]=useState('')
    // const[dateMessage,setMessageDate]=useState('')

    const[userInput,setUserInput]=useState({
        titleEntered:'',
        amountEntered:'',
        dateEntered:''                  
    })
    const titleHandler=(event)=>{
        setUserInput((previousState)=>{
          return  {
            ...previousState,
            titleEntered:event.target.value
        }
        }
        )
        // setMessageTitle('')
        // setFormCheck(true)
    }
    const amountHandler=(event)=>{
        setUserInput((previousState)=>{
            return {
...previousState,
amountEntered: event.target.value
            }
        })
        // setMessageAmount('')
        // setFormCheck(true)
    }
    const dateHandler=(event)=>{
        setUserInput((previousState)=>{
            return {
...previousState,
dateEntered: event.target.value 
            }
           
        })
       
        // setMessageDate('')
        // setFormCheck(true)
       
    }
    // console.log(userInput)
    const submitHandler=(event)=>{
        event.preventDefault();
       
        if(userInput.titleEntered.trim()==='' && userInput.amountEntered.trim()===''&& userInput.dateEntered.trim()===''){
            SetError({
                title:'Error',
                message:'Fields Cant be Empty'
            })
            // setMessageTitle('Please enter Title')
            // setMessageAmount('Please enter Amount')
            // setMessageDate('Please choose Date')
            // setFormDisplay(true)
            // setFormCheck(false)
        }else{

     
        if(userInput.titleEntered==='' ){
            // setMessageTitle('Please enter Title')
            // setFormDisplay(true)
            // setFormCheck(false)
            SetError({
                title:'Error',
                message:'Please Enter A Title'
            })
         
      }else if(userInput.amountEntered===''){
        // setMessageAmount('Please enter Amount')
        // setFormDisplay(true)
        // setFormCheck(false)
        SetError({
            title:'Error',
            message:'Please Enter An Amount'
        })

      }else if(userInput.dateEntered===''){
        // setMessageDate('Please choose Date')
        // setFormDisplay(true)
        // setFormCheck(false)
        SetError({
            title:'Error',
            message:'Please Pick A Date'
        })
      }else{

        const expenseData={
            title:userInput.titleEntered,
            amount:+userInput.amountEntered,
            date:new Date(userInput.dateEntered)
        }
   
        props.onSaveDataHandler(expenseData)
        setUserInput({
            titleEntered:'',
            amountEntered:'',
            dateEntered:''       
        })
        setFormDisplay(false)
 
    }
}
  } 




    const dataRender=()=>{
        setFormDisplay(true)
    }
    const onCancel=()=>{
        setFormDisplay(false)
        setUserInput({
            titleEntered:'',
            amountEntered:'',
            dateEntered:''       
        })
        setMessageTitle('')
        setMessageAmount('')
        setMessageDate('')

    }
    const onConfirmError=()=>{
        SetError(null)
    }
  

    return (
        <div className='!w-full'>
        {Error && (<ErrorModal title={Error.title} message={Error.message} onConfirm={onConfirmError} text='Okay'/>)}
<form onSubmit={submitHandler}>
{userData && <div>
    <div className={`new-expense__controls !w-full`}>
        <div className='w-full flex gap-2 max-lg:flex-col'>
        <div className='new-expense__control w-[50%]'>
            <label style={{color:'white'}}>Title</label>
            <input onChange={titleHandler} className='w-full !h-10' type="text" value={userInput.titleEntered}/>
            {/* <p  style={{color:'red'}}>{titleMessage}</p> */}
        </div>
        <div className='new-expense__control w-[50%]'>
            <label style={{color:'white'}}>Amount</label>
            <input onChange={amountHandler} type="number" className='w-full !h-10' min="0.01" step='0.01' value={userInput.amountEntered} />
            {/* <p  style={{color:'red'}}>{amountMessage}</p> */}
        </div>
        </div>
        <div  className='new-expense__control w-[50%]'>
            <label style={{color:'white'}}>Date</label>
            <input onChange={dateHandler} type="date" className='w-full !h-10' min="2019-01-01" max="2023-12-01" value={userInput.dateEntered} />
            {/* <p  style={{color:'red'}}>{dateMessage}</p> */}
        </div>
    </div>
    <div className='new-expense__actions'>
    <button type='submit' onClick={onCancel}>
       Cancel
    </button>
    <button type="submit">
        ADD Expense
    </button>
    </div>
</div>}
{!userData && <div className='w-full'><button onClick={dataRender}>ADD New Expense</button></div>}
    


</form>
</div>
        
    ) 
}

export default ExpenseForm;