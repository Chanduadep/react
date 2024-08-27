import React from "react";
// const Mapping=(fname)=>{
//     console.log(fname);
const Mapping=({fname})=>{
    console.log(fname);
    return(
        <div>
            <h1>Mapping</h1>
            {fname.map((name)=>(
               <ul><li>{name}</li></ul> 
            ))}
        </div>
    )
}
export default Mapping;