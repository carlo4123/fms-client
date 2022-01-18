import axios from "axios"
import { useState } from "react"
import UserUnitsTable from "./userUnitsTable"


const UserTable = ({user}) => {


    const id = user._id
  const [formValue,setFormValue] = useState()
  const [formErrors, setFormErrors] = useState()
 
    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
         const res =  await  axios.post('https://fms-backend-portal.herokuapp.com/casenumber/check-casenumber/',{casenumber:formValue})

           
       const data = await res.data.id
      
        
        if(data){
          const  push = await  axios.post('https://fms-backend-portal.herokuapp.com/account-type/push/'+id,{casenumberID:data})


          console.log("push",push)
         }
           
        } catch (error) {
            const errors =error.response.data
      
           console.log(errors)
            if(errors){  
                if(errors.errors.casenumber){
                    setFormErrors(errors.errors.casenumber)
                }

                if(errors.errors.units){
                    setFormErrors(errors.errors.units)
                }
               
            }
            
        }

       
    }

    const handleChange=(e)=>{
        setFormValue(e.target.value)
        setFormErrors(null)
    }



    return (

      
        <div>
            <form className="user-table-form" action="" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="input casenumber" className="input" onChange={(e)=>handleChange(e)}  />

            <button className="button button-send" type="submit">add</button>
            </form>
            <p className="error">{formErrors}</p>
        <UserUnitsTable user={user} />

        </div>
      );
}
 
export default UserTable;