import { Button, Nav } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'


function Aboutpage(){
    const nav = useNavigate()
    return(
        <>
        <h1></h1>
        <p>
           About page working
           <br/>
           <Button variant="danger" onClick={()=>nav("/")}>Back</Button>
        </p>
        </>
    )
}
export default Aboutpage