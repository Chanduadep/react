import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const router = useNavigate();

    function Tohome() {
        router("/");
    }
    function Tologin() {
        router("/login");
    }
    function Toregister() {
        router("/register");
    }
    function Tocounter(){
        router("/counter");
    }
    return (
        <div className="parentDiv">
            <h1 onClick={Tohome}>Home</h1>
            <h1 onClick={Tologin}>Login</h1>
            <h1 onClick={Toregister}>Register</h1>
            <h1 onClick={Tocounter}>Counter</h1>
        </div>
    );
}
export default Navbar;