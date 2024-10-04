

import { configureStore } from "@reduxjs/toolkit";

// import {CounterReducer} from './counterSlice'
import { default as CounterReducer } from './counterSlice';

export const Stores = configureStore({
    reducer:{
        counter : CounterReducer
    },
})
