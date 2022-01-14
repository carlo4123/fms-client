import axios from "axios"
import { useState } from "react"
import UserUnitsTable from "./userUnitsTable"


const UserTable = ({user}) => {
    const id = user._id
  const [formValue,setFormValue] = useState()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
         const res =  await  axios.post('http://localhost:5000/casenumber/check-casenumber/',{casenumber:formValue})

       const data = await res.data._id
       console.log("return id",data)
        
        if(data){
          const  push = await  axios.post('http://localhost:5000/account-type/push/'+id,{casenumberID:data})

          alert("success")
         }else{
             alert("Casenumber doesn`t exist")
         }
           
        } catch (error) {
            console.log(error)
             alert("Casenumber doesn`t exist")
        }

       
    }

    const handleChange=(e)=>{
        setFormValue(e.target.value)
    }



    return (

      
        <div>
            <form className="user-table-form" action="" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="input casenumber" className="input" onChange={(e)=>handleChange(e)}  />

            <button className="button button-send" type="submit">add</button>
            </form>
        <UserUnitsTable user={user} />

        </div>
      );
}
 
export default UserTable;