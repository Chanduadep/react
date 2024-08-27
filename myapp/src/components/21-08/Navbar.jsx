import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const router = useNavigate();

    // function Tohome() {
    //     router("/");
    // }
    // function Tologin() {
    //     router("/login");
    // }
    // function Toregister() {
    //     router("/register");
    // }

    function Tocounter(){
        router("/counter");
    }
    function ToredirectEffect1(){
        router("/useeffect1")
    }
    function ToredirectEffect2(){
        router("/useeffect2")
    }
    function ToredirectEffect3(){
        router("/useeffect3")
    }
    function ToredirectEffect4(){
        router("/useeffect4")
    }

    return (
        <div className="parentDiv">
            {/* {/* <h1 onClick={Tohome}>Home</h1> */}
            {/* <h1 onClick={Tologin}>Login</h1> */}
            {/* {/* <h1 onClick={Toregister}>Register</h1> */  }
            <h1 onClick={Tocounter}>Counter</h1>
            <h1 onClick={ToredirectEffect1}>useEffect1</h1>
            <h1 onClick={ToredirectEffect2}>useEffect2</h1>
            <h1 onClick={ToredirectEffect3}>useEfect3</h1>
            <h1 onClick={ToredirectEffect4}>useEffect4</h1>

            
        </div>
    );
}
export default Navbar;