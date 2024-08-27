import { useEffect,useState } from "react";
// import "../styles/Navbar.css";

function UseEffect4(){
    const [counter,setCounter]=useState(1);
    const [counter2,setCounter2]=useState(2);
    function Increment(){
        setCounter(counter+1);
    }
    
    function Increment2(){
        setCounter2(counter2+1);
    }
    useEffect(()=>{
        console.log("This is effect4");
    },[counter,counter2]);
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={Increment}>Inc</button>
            <h1>Counter2:{counter2}</h1>
            <button onClick={Increment2}>Inc</button>
        </div>
    );
}
export default UseEffect4;