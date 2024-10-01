
import{useState,useMemo} from 'react'

function Usememox(){
    const[number,setNumber] = useState(0)
    const[count,setCount] = useState(0)
    const[square,setSqare] = useState(0)
    const inCount =()=>{
        console.log('inCount working')
        setCount(count+1)
    }

   const changeValue=(e)=>{
    setNumber(e.target.value)
   }
    // function squarenumber (number){
    //    let sq= Math.pow(Number(e.target.value),2)
    //    setSqare(sq)
    //     console.log('square' , sq)
    // }
    const squareResult = useMemo(()=>{
       return squarenumber(number)
    },[number])

    return(
        <>
        <button onClick={inCount}>INC Count</button>
        <div>output:{count}</div>
        <button>Number</button>
        <input type='text' value={number} onChange={changeValue}></input>
        <div>output:{squareResult}</div>
        <button>Square</button>
        </>
    )
}
function squarenumber(number){
    
    let sq= Math.pow(Number(number),2)
    
    console.log('square',sq)
    return sq

}
export default Usememox;