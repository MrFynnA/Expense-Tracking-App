import { createSlice, configureStore } from "@reduxjs/toolkit";



const expenseSlice=createSlice({
    name:'expense',
    initialState:{
        expenseTotal:0,
    },
    reducers:{
        onFilterdExpenseTotal(state,action){
        state.expenseTotal=state.expenseTotal+action.payload.totalExpense
        }
    }
})


export const expenseAction=expenseSlice.actions.onFilterdExpenseTotal

const store=configureStore({
    reducer:expenseSlice.reducer
})

export default store