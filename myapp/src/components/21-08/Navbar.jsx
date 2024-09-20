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
    function Touseparams(){
        router("/products/:id")
    }
    function Topropdrilling(){
        router("/props")
    }
    function Tomapping(){
        router("/mapping")
    }
    function Todo(){
        router("/todo")
    }
    function Tomapping2(){
        router("/mapping2")
    }
    function ToProducts(){
        router("/getproducts")
    }

    return (
        <div className="parentDiv">
            { <h1 onClick={Tohome}>Home</h1> }
            <h1 onClick={Tologin}>Login</h1>
            { <h1 onClick={Toregister}>Register</h1> }
            {/* <h1 onClick={Tocounter}>Counter</h1>
            <h1 onClick={ToredirectEffect1}>useEfft1</h1>
            <h1 onClick={ToredirectEffect2}>useEfft2</h1>
            <h1 onClick={ToredirectEffect3}>useEft3</h1>
            <h1 onClick={ToredirectEffect4}>useEfft4</h1>
            <h1 onClick={Touseparams}>useParams</h1>
            <h1 onClick={Topropdrilling}>PropDrilling</h1>
            <h1 onClick={Tomapping}>Mapping1</h1>
            <h1 onClick={Tomapping2}>Mapping2</h1>
            <h1 onClick={Todo}>Todo</h1> */}
            <h1 onClick={ToProducts}>Products</h1>
            
        </div>
    );
}
export default Navbar;