import { useEffect,useState } from "react";
// import "../styles/Navbar.css";

function UseEffect2(){
    const [counter,setCounter]=useState(1);
    function Increment(){
        setCounter(counter+1);
    }
    useEffect(()=>{
        console.log("This is effect2");
    },[]);
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={Increment}>Inc</button>
        </div>
    );
}
export default UseEffect2;