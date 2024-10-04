import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { deCount, inCount } from './reduxapp/counterSlice'
import {useSelector ,useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch()
 const countValue = useSelector((state) =>state.counter.count)
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Count:{countValue}</h1>
      <button onClick={()=>{
        dispatch(inCount())
      }}>increment</button> 
      <button onClick={()=>{
        dispatch (deCount())
      }}> decrement</button>       
      </div>
        
    </>
  )
}

export default App
