import { memo } from "react";



function Counter({increment}){
    return(
        <>
        <button onClick={()=>{increment()}}>Inc</button>
        </>
    )
}
export default Counter;