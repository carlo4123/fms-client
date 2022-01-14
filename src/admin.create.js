import axios from "axios";
import { useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import logo from './assets/logo.png';




const CreateAdmin = () => {

  const formObject = {
    firstName: "",
    lastName: "", 
    email: "",
    password: "",
    accountType: ""

  }
  const [success,setSucces] = useState(false)
  const [formErrors,setFormErrors] = useState(formObject)
  const [formValues,setFormValues] =useState(formObject)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors(formObject)
    setSucces(false)
    setFormValues({ 
      ...formValues, 
      [name]: value 
    });

  };
    
   const handleSubmit = async (e) => {
    e.preventDefault()
   
   try {
     const res = await axios.post('http://localhost:5000/account-type/signup',formValues)
    
    const data = await res.data
    console.log(data)
    setSucces(true)
   } catch (err) {
     const errors = err.response.data
    console.log(err.response.data)
    if(errors){
      setFormErrors(errors.errors)
    }
   }
  
   }

    return (
        <div className="admin">
            <img src={logo} alt="" className="login-logo"/>
            <h1 className="login-heading">FMS Portal</h1>
            <p className="login-sub-heading">Create Admin Account</p>

           
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
           
            
            <form  className="" onSubmit={handleSubmit}>
          
            <div className="error-message"></div>	
            <div className="input-field-group">
            <label htmlFor="username" className="input-label">Email:</label>
            <input
             
            type="text"
            value={formValues.email}
            onChange={handleChange}
            name="email" 
            className="input"
            placeholder="email" />
            <p className="error">{formErrors.email}</p>
            </div>

            <div className="input-field-group">
            <label htmlFor="passwordn" className="input-label">password:</label>
            <input
            type="password" 
            value={formValues.password}
            onChange={handleChange}
            name="password" 
            className="input" 
            placeholder="password" />
             <p className="error">{formErrors.password}</p>
            </div>

            <div className="input-field-group">
            <label htmlFor="first-name" className="input-label">First Name:</label>
            <input
            type="text" 
            value={formValues.firstName}
            onChange={handleChange}
            name="firstName" 
            className="input" 
            placeholder="First Name" />
            <p className="error">{formErrors.firstName}</p>
            </div>

            <div className="input-field-group">
            <label htmlFor="last-name" className="input-label">last Name:</label>
            <input
            type="text" 
            value={formValues.lastName}
            onChange={handleChange}
            name="lastName" 
            className="input" 
            placeholder="Last Name" />
            <p className="error">{formErrors.lastName}</p>
            </div>

            <div className="input-field-group">
            <label htmlFor="make" className="input-label">Account Type:</label>
            <select
                name="accountType" 
                value={formValues.accountType}
                onChange={handleChange}
                className="input" id="accountType">
                            <option value="">Select Account Type</option>
                            <option value="admin_TD">Techinical Division</option>
                            <option value="admin_ISMD">ISMD</option>
                            <option value="admin_Legal">Legal</option>
                            <option value="admin_OB">Office of the board</option>
                            <option value="admin_OC">Office of the chairman</option>
                            <option value="admin_OED">Office of the Executive Director</option>
                            <option value="admin_Docket">Docket</option>
                            
                        </select>

                        <p className="error">{formErrors.accountType}</p>
            </div>


            <div className="admin-footer">

            {success ? <div className="successful">
             <AiOutlineCheckCircle className="successful-icon"/> Successful Resgistered</div> : 
             <button type="submit" value="insert data" className="button button-primary">CREATE</button>
            
             }
             </div>
            </form>
        </div>

      );
}
 
export default CreateAdmin;