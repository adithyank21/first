import {createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        inCount:(state)=>{
            state.count = state.count+1;
        },
        deCount : (state) =>{
            state.count = state.count -1;
        },
    }
})
export const {inCount , deCount} =CounterSlice.actions
export default CounterSlice.reducer