import {useState} from 'react';

function Counter(){
    const [counter,setCounter]=useState(0);

    function Incr(){
        setCounter(counter+1);
        
    }
    
    function Decr(){
        if(counter<=0){
            return;
        }
        setCounter(counter-1);
    }
    function Reset(){
        setCounter(0);
    }
    return (
        <div className='counterdiv'>
            <h1 >Counter:{counter}</h1>
            <button className="buttoncol" onClick={Incr}>Inc</button>
            <button className="buttoncol" onClick={Decr}>Dec</button>
            <button className="buttoncol" onClick={Reset}>Reset</button>

        </div>
    )
}
export default Counter;