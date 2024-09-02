import React, { useReducer } from 'react';
function Reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "Increment":
            return { counter: state.counter+1 }
        case "Decrement":
            return { counter: state.counter-1 }
        case "Reset":
            return { counter: 1 }
        default:
            return state;
    }
}
const InitialState = { counter: 1 };
const UseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, InitialState)
    function Increment() {
        dispatch({ type: "Increment" })
    }
    function decrement() {
        dispatch({ type: "Decrement" })
    }
    function Reset() {
        dispatch({ type: "Reset" })

    }
    return (
        <div className='counterdiv'>
            <h1>Counter:{state.counter}</h1>
            <button className="buttoncol" onClick={Increment}>Increment</button>
            <button className="buttoncol" onClick={decrement}>decrement</button>
            <button className="buttoncol" onClick={Reset}>Reset</button>
        </div>
    )
}
export default UseReducer;