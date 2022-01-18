import axios from 'axios';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const SendModals = ({key,id,casenumber,accountType}) => {
    

    console.log("asdfas",accountType)
    const [modalIndex,setModalIndex] = useState(null)
    const toggleItem = index => {
        setModalIndex(index)
    }

    const [formValue,setFormValue] =useState()


    let message = "your documents forwarded to"

    switch(formValue){
        case 'admin_td':
            message += " Technical Division"
            break;
        case 'admin_ismd':
            message += " ISMD"
            break;
        case 'admin_legal':
            message += " Legal Division"
            break;
        case 'admin_ob':
            message += " Office of the board"
            break;
        case 'admin_oc':
            message += " Office of the Chairman"
            break;
        case 'admin_oed':
            message += " Office of the Executive Director"
            break;
        case 'admin_docket':
            message += "Docket"
            break; 
            default:
    }
    console.log(message)

    const tracking = {
        tracking:{
            where: formValue,
            message: message
        }
    }

   
    
    let set 
    
    if(accountType === "admin_docket"){
        set = {
            location:{
                division: formValue,
                received: true
            },
            readyToRelease: false,
            readyToApproved: true
        }
    }else{

        set = {
            location:{
                division: formValue,
                received: false
            }
       }
    }

    // console.log(set)

  
   const params = [set,tracking]

    const handleSubmit = (e,id) =>{



        axios.patch('https://fms-backend-portal.herokuapp.com/casenumber/update/'+id,{params} )
        .then(res => setModalIndex(null))
        .catch(error => {
            console.log("sending",error);
        })
        console.log(id)
        e.preventDefault()
    }
    return ( 
        <td className="table-data table-data-button">
           
        <div className="button button-send" onClick={() => toggleItem(key)}>send</div>
        <div className={modalIndex === key ? "modal-1 active1" : "modal-1"}>
        <MdClose className="close" onClick={ () => setModalIndex(null) }/>
            <form action="" onSubmit={(e)=>handleSubmit(e,id)} className="modal-1-form">
                <div className="heading-3">forward to:</div>
                <p>{casenumber} </p>
                <select name="Denomination" onChange={(e)=> setFormValue(e.target.value)} className="input" id="cars">
                    <option value="admin_td">Techinical Division</option>
                    <option value="admin_ismd">ISMD</option>
                    <option value="admin_legal">Legal</option>
                    <option value="admin_ob">Office of the board</option>
                    <option value="admin_oc">Office of the chairman</option>
                    <option value="admin_oed">Office of the Executive Director</option>
                    <option value="admin_docket">Docket</option>
                   
                </select>
               
                <button type="submit" className="button button-primary">send</button>
            </form>
        </div>
        
    </td>
     );
}
 
export default SendModals;