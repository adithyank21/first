import { useState , useCallback } from "react"
import Counter from "./counter"


function Usecallbackex(){
    const[count , setCount] = useState(0)
    const increment =()=>{
        console.log("count")
        // setCount(count+1)
        setCount(prevCount =>prevCount+1)
        setCount(prevCount =>prevCount+1)

    }
    // const increment=useCallback(()=>{
    //     setCount(prevCount => prevCount+1)
    //     // setCount(prevCount => prevCount+1)

    // },[])
    return(
        <>
        <Counter increment={increment}/>
        Count:{count}
        <button onClick={()=>{
            setCount(prevCount=> prevCount-1)
        }}>Decrement</button>
        </>
    )
}
export default Usecallbackex;