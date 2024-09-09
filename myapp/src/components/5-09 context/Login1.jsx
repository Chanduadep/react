import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import React from 'react';

function Login1(){
    const {state,dispatch}=useContext(DarkModeContext);
    const ChangeTheme=()=>{
        if(state.mode=="light"){
        dispatch({type:"DARKMODE"})
    }else{
        dispatch({type:"LIGHTMODE"}) 
    }
    };
    return(
    <>
    <p style={{textAlign:"center"}}>Current Theme-{state.mode}</p>
    <h1 style={{
        textAlign:"center",
        backgroundColor: state.mode=="light"? "white":"black",
        color:state.mode=="light"?"black":"white",
    }}>login</h1>
    <button style={{marginLeft:"710px",marginTop:"20px"}} onClick={ChangeTheme}>Chandge theme</button>
    </>
    );
}
export default Login1;