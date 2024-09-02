
import { useEffect, useState } from "react";
// import "../components/styles/Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterValidation2() {
  const router=useNavigate()
  const [errors,setErrors]=useState({
    name: "Name is Required",
    email: "Email is Required",
    password: "Password is Required",
    confirmPassword: "Confirmpassword is Required",
  })
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name, "check");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if(userData.name && userData.email && userData.password && userData.confirmPassword)
      {
        if(userData.password !== userData.confirmPassword){
          return toast.error("password and confirm password not matched")
        }
    try {
      // const response = await axios.post('http://localhost:8000/api/v1/auth/register', { userData });
      const response={
        data:{success:true, message: "Registration succesfully completed.."},
      };
      if (response.data.success) {
        // console.log(response);
        // alert(response.data.message)
        toast.success(response.data.message);
        router('/login');
      }

    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }else{
    toast.error("All fields are required")
  }
  }

  // var myobject = {};
  // myobject.hi = "hii";
  // myobject[event.target.name] = event.target.value
  // {[event.target.name] : event.target.value}
  useEffect(()=>{
    const errors={};
    if(userData.name){
        errors["name"]="";
        // setErrors({...errors, ["name"]: ""});
    }else{
        errors["name"]="Name is Required";
        // setErrors({...errors, ["name"]: "Name is Required"}); 
    }
    if(userData.email){
        errors["email"]="";
        // setErrors({...errors, ["email"]: ""});
    }else{
        errors["email"]="email is Required";
        // setErrors({...errors, ["email"]: "email is Required"}); 
    }
    if(userData.password){
        errors["password"]="";
        // setErrors({...errors, ["password"]: ""});
    }else{
        errors["password"]="password is Required";
        // setErrors({...errors, ["password"]: "password is Required"}); 
    }
    if(userData.confirmPassword){
        errors["confirmPassword"]="";
        // setErrors({...errors, ["confirmPassword"]: ""});
    }else{
        errors["confirmPassword"]="confirmPassword is Required";
        // setErrors({...errors, ["confirmPassword"]: "confirmPassword is Required"}); 
    }
    setErrors(errors);
  },[userData]);
  return (
<div className="body">
    <div className="login-container">
     
        <h1 className="form-title">Register</h1>
      
      <div className="form">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-wra">
          <label className="label-name">Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Type your name.."
            name="name"
            className="input-field"
          />
          {errors?.name && <p>{errors?.name}</p>}
          </div>
          <br />
          <div className="input-wra">
          <label className="label-name">Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Type your email.."
            name="email"
            className="input-field"
          />
           {errors?.email && <p>{errors?.email}</p>}
           </div>
          <br />
          <div className="input-wra">
          <label className="label-name">Password </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Type your password.."
            name="password"
            className="input-field"
          />
           {errors?.password && <p>{errors?.password}</p>}
           </div>
          <br />
          <div className="input-wra">
          <label className="label-name">ConfirmPassword </label>
          <br />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm your password.."
            name="confirmPassword"
            className="input-field"
          />
           {errors?.confirmPassword && <p>{errors?.confirmPassword}</p>}
           </div>
          <br />
          <button className='login-button'>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
export default RegisterValidation2;
