import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [counter,setCounter]=useState(0);

    const counterRef=useRef(20);
    const inputRef=useRef();


    function IncrementRef(){
        counterRef.current++;
        console.log(counterRef.current,"counter Ref current")
      
    }
    useEffect(()=>{inputRef.current.focus()},[counter])
    // function handleButton(){
    //   inputRef.current.focus()
    // }
  return (
    <div>
        <h1>Counter from Ref:{counterRef.current}</h1>
        
        <button onClick={IncrementRef}> Incfor Ref</button>
        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <input type='text' ref={inputRef}  />
        {/* <button onClick={handleButton}>To focus on input</button> */}
    </div>
  )
}

export default UseRef