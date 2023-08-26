import { createSlice, configureStore } from "@reduxjs/toolkit";



const expenseSlice=createSlice({
    name:'expense',
    initialState:{
        expenseItems:[],
    },
    reducers:{
        onGetUpdatedItems(state,action){
            console.log(action.payload)
    state.expenseItems=action.payload
        },
        onUpdateExpenseItem(state,action){
            console.log('dipatched')
       const existingItem=state.expenseItems.find(items=>items.id===action.payload.id)
       if(existingItem){
        existingItem.title=action.payload.title
       }
        }
    }
})
const UISlice=createSlice({
    name:'UI',
    initialState:{
        uiChange:false,
        expenseItemId:''
    },
    reducers:{
         onexpenseEdit(state,action){
            console.log(action.payload)
       state.uiChange=true
       state.expenseItemId=action.payload
         },
         oneexpenseCloseEdit(state,action){
            state.uiChange=false,
            state.expenseId=state.expenseId=action.payload
         }
    }
})
console.log(UISlice.reducer.uiChange)


export const expenseAction=expenseSlice.actions
export const uiAction= UISlice.actions

const store=configureStore({
    reducer:{
        expenseState:expenseSlice.reducer,
        uiState:UISlice.reducer
    
    }
})

export default store