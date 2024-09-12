import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

const Memo =()=>{
    const [counter,setCounter]=useState(1);
    const [counter2,setCounter2]=useState(10);
    return(
        <div className='memocounter'>
       
        <h1>Memo Counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <AnotherComponent counter2={counter2}/>
        <button onClick={()=>setCounter2(counter2+1)}>Increment</button>
        
        </div>
    )
}
export default Memo;