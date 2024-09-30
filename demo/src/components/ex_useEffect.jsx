
import { useEffect, useState } from "react"

function ExuseEffect(){
   const[count,Setcount] =useState(0)
   const [value,Setvalue] =useState(0)
   const [record,setRecord] =useState([])
   useEffect(()=>{
    // console.log("useEffect")
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setRecord[json])
   })
//    useEffect(()=>
// {console.log("value")},[value]
// )

    return(
        <>
        {
            record.length >0 &&
            record.map((item) =>
            {
                return(
                    <p>
                        {item.title}
                    </p>
                )
            })

        }

        {/* <h1>Hai</h1> */}
        {/* <button onClick={()=>
            {
                Setcount(count+1)
            }
        }>Count</button>
        <p>
         {count}
        </p>
        <button onClick={()=>
            {
                Setvalue(value+1)
            }
        }>value</button>
        <p>
            {value}
        </p> */}
        </>
    )

}
export default ExuseEffect