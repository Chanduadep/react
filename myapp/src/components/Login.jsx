import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import "../components/styles/login.css";
import { useNavigate } from "react-router-dom";
import api from "./index"
import axios from "axios";
import { AuthContext } from './Context/AuthContext';


function Login(){
  const {dispatch}=useContext(AuthContext)
  const router=useNavigate()
    const [formError,setFormError]=useState({})
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });
    console.log(userData,"userData");
    function handleChange(event){
        setUserData({...userData,[event.target.name]:event.target.value});
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const errors=validateErrors();
        console.log(errors);
        if(Object.keys(errors).length===0){
        if( userData.email && userData.password )
          {
            
        try {
          // const response = await axios.post('http://localhost:8000/api/v1/auth/register', { userData });
          let response=await api.post("/auth/login",{userData});
          // const response={
          //   data:{success:true, message: "Registration succesfully completed.."},
          // };
          if (response.data.success) {
            // console.log(response);
            // alert(response.data.message)
            dispatch({type:"LOGIN",payload:response.data.userData})
            toast.success(response.data.message);
            router("/");
          }else{
            toast.error(response.data.message)
          }
    
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      }else{
        toast.error("All fields are required")
      }
      }else{
        setFormError(errors)
      }
      }
      const validateErrors=()=>{
        const errors={};
        if(!userData.email){
            errors.email = "Email is Required";
        }
        if(!userData.password){
            errors.password="Password is Required";
        }
        return errors;
      }
    return (
        <div className='body'>
        <div className='login-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit} className='login-form'>
            <div className='input-wra'>
            <label className='label-name'>Email:</label><br/>
            <input className='input-field' onChange={handleChange} type='email' placeholder='Type your email here..' name='email'/>
            
            {formError?.email && <p>{formError?.email}</p>}
            </div><br/>
            <div className='input-wra'>
            <label className='label-name'>Password:</label><br/>
            <input className='input-field' onChange={handleChange} type='password' placeholder='Type your password here..' name='password'/>

            {formError?.password && <p>{formError?.password}</p>}
            </div><br/>
            <button className='login-button'>Login</button>
            </form>
        </div>
        </div>
    )
}
export default Login;
