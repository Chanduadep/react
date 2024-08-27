import React from "react";
const Propdrilling=({fname,counter,Inc})=>{
    console.log(fname,"Name");
    return(
        <div>
            
            <h1>Counter:{counter}</h1>
            <button onClick={Inc}>Inc</button>
        </div>
    );
};
export default Propdrilling;