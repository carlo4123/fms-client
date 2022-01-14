import axios from "axios";
import { useState } from "react";

const TechnicalDivision = () => {


  const [id,setId] = useState()
  
  const [success,setSucces] = useState(false)
    const [formValues, setFormValues] = useState("");
  const [formErrors, setFormErrors] = useState("");
 



    const handleChange = (e) => {
        const {value} = e.target;
        setFormValues(value);
        setFormErrors("")
        setSucces(false)
 
    }
      const handleSubmit =  async (e) => {
        e.preventDefault();

    
      
       try {
         const res = await axios.post('https://fms-backend-portal.herokuapp.com/casenumber/add', {
          casenumber: formValues,
            tracking: [
                 {
                    where:"TD",
                    message: "Technical division forwarder your documents to ISMD"
                 }
                ],
          location : {
                  division: "admin_ismd",
                  received: false
              }
        } )
        setId(res.data)
      
        setSucces(true)
     
       
       } catch (error) {
          const errors =error.response.data
        console.log(error)
          if(errors){
            setFormErrors
            (errors.errors.casenumber)
          }
          setSucces(false)
       }
  
      
        
      };
  
console.log(id)
  
    
    
        
    
console.log(formValues)

     
    



    return ( 


        <div className="TD-container">

            <div className="TD-wrapper">
                <div className="TD-heading">
                    INSERT CASE NUMBER
                </div>
                {success && <p className="successful">Successful!!</p>}
               
        <br />
        
                <form onSubmit={handleSubmit} className="TD-form">
                <div className="input-field-group">
                <label htmlFor="caseNumber" className="input-label">case number:</label>      
                <input 
                    type="text" 
                    value={formValues}
                    onChange={handleChange}
                    name="caseNumber" 
                    className="input" 
                    placeholder="AABBB123"/>
                </div>
                <p className="error">{formErrors}</p>
               
                <button type="submit" className="button button-primary">insert</button>
                </form>

            </div>
        </div>

     );
}
 
export default TechnicalDivision;