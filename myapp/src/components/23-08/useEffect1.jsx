import { useEffect,useState } from "react";



function UseEffect1(){
    const [counter,setCounter]=useState(1);
    function Increment(){
        setCounter(counter+1);
    }
    useEffect(()=>{
        console.log("This is effect1");
    });
    return(
        <div >
            <h1>useEffect1:{counter}</h1>
            <button onClick={Increment}>Inc</button>
        </div>
    );
}
export default UseEffect1;