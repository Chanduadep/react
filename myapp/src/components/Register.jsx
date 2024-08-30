
import { useState } from "react";
import "../components/styles/Register.css";

function Register() {
  const [userData, setUserData] = useState({
    usernName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name, "check");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  // var myobject = {};
  // myobject.hi = "hii";
  // myobject[event.target.name] = event.target.value
  // {[event.target.name] : event.target.value}

  return (

    <div className="parentdiv">
      <div className="regi">
      <h1>Register</h1>
      </div>
      <div className="form">
      <form >
        <label>Name</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type your name.."
          name="userName"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Type your email.."
          name="email"
        />
        <br />
        <label>Password </label>
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Type your password.."
          name="password"
        />
        <br />
        <label>ConfirmPassword </label>
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Confirm your password.."
          name="confirmPassword"
        />
        <br />
        <input className="button" type="submit" value="Register" />
      </form>
      </div>
    </div>
  );
}
export default Register;
