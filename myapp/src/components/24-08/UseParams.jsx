import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
 
function UseParams(){
    const {id} =useParams();
    const [prodetails,setProdetails]=useState({})
    return(
        <div>
            <h1>UseParams-{id}</h1>
        </div>
    )
}
export default UseParams;