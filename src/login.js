
import axios from "axios";
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import logo from './assets/logo.png';

const Login = ({user, setUser}) => {
  const navigate = useNavigate()
  const formObject = {
    email: "",
    password: "",
  }


  const [formErrors,setFormErrors] = useState(formObject)
  const [formValues,setFormValues] =useState(formObject)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors(formObject)
    
    setFormValues({ 
      ...formValues, 
      [name]: value 
    });

  };

 



    
   const handleSubmit = async (e) => {
  e.preventDefault()

   try {
    const cookies = new Cookies();
     const res = await axios.post('https://fms-backend-portal.herokuapp.com/account-type/login',formValues)
    
    const data = await res.data
   
    setUser(data.user)
    localStorage.setItem("jwt", data.token);
    cookies.set("jwt", data.token);
   
    navigate('/dashboard')
   } catch (err) {
     const errors = err.response.data
    // console.log(err.response.data)
    if(errors){
      setFormErrors(errors.errors)
    }
   }

  }
   
    return (
        <div className="login">
            <img src={logo} alt="" className="login-logo"/>
            <h1 className="login-heading">FMS Portal</h1>
            <p className="login-sub-heading">Franchising Management System</p>

          
            <form  className="login-form" onSubmit={handleSubmit}>
            <div className="error-message"></div>	
            <div className="login_field-group">
                <AiOutlineUser className="login-icon"/>
                <input
                type="text" 
                name="email"
                placeholder="email" 
                value={formValues.email}
                onChange={handleChange} 
                className="login-input"
                 />
           
            </div>
            <p className="error">{formErrors.email}</p>

            <div className="login_field-group">
            <VscKey className="login-icon"/>
                <input 
                type="password"  
                name="password"
                placeholder="password" 
                value={formValues.password}
                onChange={handleChange} 
                className="login-input" /> 
            </div>
            <p className="error">{formErrors.password}</p>

            {/* <div className="login_remember-wrapper">
                <input type="checkbox" name="remember" id="remember"  />
                <label  htmlFor="remember">Remember me</label>
            </div> */}

            <input type="submit" name="login" value="Login" className="button button-primary"/>

            </form>
        </div>

      );
}



export default Login;


