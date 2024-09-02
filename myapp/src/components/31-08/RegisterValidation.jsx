
import { useState } from "react";
// import "../components/styles/Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterValidation() {
    const router = useNavigate()
    const [formError, setFormError] = useState({})
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
        const errors = validateErrors();
        console.log(errors);
        if (Object.keys(errors).length == 0) {
            if (userData.name &&
                userData.email &&
                userData.password &&
                userData.confirmPassword) {
                if (userData.password !== userData.confirmPassword) {
                    return toast.error("password and confirm password not matched")
                }
                try {
                    // const response = await axios.post('http://localhost:8000/api/v1/auth/register', { userData });
                    const response = {
                        data: { success: true, message: "Registration succesfully completed.." },
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
            } else {
                toast.error("All fields are required")
            }
        } else {
            setFormError(errors)
        }
    
    }
    const validateErrors = () => {
        const errors = {};
        if (!userData.name) {
            errors.name = "Name is required";
        }
        if (!userData.email) {
            errors.email = "email is required";
        }
        if (!userData.password) {
            errors.password = "password is required";
        }
        if (!userData.confirmPassword) {
            errors.confirmPassword = "confirmpassword is required";
        }
        return errors;
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
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="Type your name.."
                        name="name"
                    />
                    {formError?.name && <p>{formError?.name}</p>}
                    <br />
                    <label>Email</label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="email"
                        placeholder="Type your email.."
                        name="email"
                    />
                    {formError?.email && <p>{formError?.email}</p>}
                    <br />
                    <label>Password </label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="password"
                        placeholder="Type your password.."
                        name="password"
                    />
                    {formError?.password && <p>{formError?.password}</p>}
                    <br />
                    <label>ConfirmPassword </label>
                    <br />
                    <input
                        onChange={handleChange}
                        type="password"
                        placeholder="Confirm your password.."
                        name="confirmPassword"
                    />
                    {formError?.confirmPassword && <p>{formError?.confirmPassword}</p>}
                    <br />
                    <input className="button" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}
export default RegisterValidation;
