import axios from 'axios';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import DynamicInputs from './dynamic.input';

const TablePending = ({pending,accountType}) => {
    
    const navigate = useNavigate()
    console.log(accountType)
    const [modalIndex,setModalIndex] = useState(null)
    const toggleItem = index => {
        setModalIndex(index)
    }

    const [inputValue,setInputValue] = useState({
        vehicle: "",
        operator: ""
    })

    const valueOnchange = (e) =>{
        const {name, value} = e.target 
        setInputValue( {...inputValue, [name]: value})
    }


    const [inputList, setInputList] = useState([
        { 
        make: "",
         motorNumber: "",
         plateNumber: "",
         yearModel: "",
         routeFrom: "",
         routeTo: ""
    }]);

    let division =""
    switch(accountType){
        case 'admin_td':
            division += " Technical Division"
            break;
        case 'admin_ismd':
            division += " ISMD"
            break;
        case 'admin_legal':
            division += " Legal Division"
            break;
        case 'admin_ob':
            division += " Office of the board"
            break;
        case 'admin_oc':
            division += " Office of the Chairman"
            break;
        case 'admin_oed':
            division += " Office of the Executive Director"
            break;
        case 'admin_docket':
            division += "Docket"
            break; 
            default:
    }
  
    const tracking = {
        tracking:{
            where:"ISMD",
            message:`your document received by ${division}`
        }
    }
    let set = null
 if(accountType==="admin_ismd"){
   set = {
        location: {
            division: accountType,
            received: true
        },
        vehicle: inputValue.vehicle,
        companyName: inputValue.operator,
        units: inputList

     

   }
 }else{
    set = {
        location: {
            division: accountType,
            received: true
        },
    }
 }
        
  
   const params = [set,tracking]
   
    const handleSubmit = async (e,id,casenumber) =>{
        console.log("working")
        console.log(params)
        try {
          const res = await axios.patch('http://localhost:5000/casenumber/update/'+id,{params})
          setModalIndex(null)
         
            return res
        } catch (error) {
            console.log(error)
        }
        
        if(accountType!== "admin_ismd"){
            alert("received document")
        }
        console.log("received")
        e.preventDefault()
    }

    const handleSubmit2 = async (e,id) =>{
     
        try {
          const res = await axios.patch('http://localhost:5000/casenumber/update/'+id,{params})
        console.log(res.data)
        return res
        } catch (error) {
            console.log(error)
        }
        navigate('/table')
     
        console.log("received")
        e.preventDefault()
    }

  
  

    return ( 
        <table className="table table-pending">
                          <thead>
            <tr className="table-row">
            <th className="table-header">Case No.</th>
            </tr>
            </thead>
            {!pending ? <h1>No data</h1>: pending.map((item,key)=>{
                return(
                 
            
                <tbody>
                <tr className="table-row">
                <td className="table-data">{item.casenumber}</td>

                <td className="table-data table-data-button">
                    
                    {
                        accountType === "admin_ismd" ?
                         <div  className="button button-edit" onClick={() => toggleItem(key)}>Receive
                        </div>
                        :
                        <div  className="button button-edit" onClick={(e) => handleSubmit2(e,item._id)}>Receive
                        </div>
                    }
                   
                    {accountType==="admin_ismd" &&
                    <div className={modalIndex === key ? "modal active" : "modal" }>
                    <MdClose className="close" onClick={()=> setModalIndex(null)}/>

                    <div className="modal-wrapper">
                        <form action="" className="modal_form" onSubmit={(e)=>handleSubmit(e,item._id,item.casenumber)}>
                            <div className="modal_case-number"> 
                            <p className="modal_case-number-name">case number:</p>
                            <p className="modal_case-number-value">{item.casenumber}</p>
                            </div>
                           
                            <div className="input-field-group">
                            <label htmlFor="vehicle" className="input-label">Vehicle</label>
                           
                          
                         
                            <select name="vehicle" onChange={valueOnchange} className="input" >
                                <option value="">Choose Type Vehicle</option>
                                <option value="Taxi">Taxi</option>
                                <option value="Truck">Truck</option>
                                <option value="bus">bus</option>
                                <option value="puv">puv</option>
                            </select>
                      
                            </div>

                            <div className="input-field-group">
                            <label htmlFor="operator" className="input-label">company name or operator:</label>
                            <input type="text" name="operator" onChange={valueOnchange}  className="input" placeholder="company name or operator" />
                            </div>
                            
                             <DynamicInputs setInputList={setInputList} inputList={inputList}/>
                       
                           

                            <div className="modal_form-footer">
                            <button type="submit" value="insert data" className="button button-primary">insert data</button>
                            </div>

                        </form>
                    </div>


                    </div>
                    }
                </td>
                </tr>
                </tbody>
                   
                )
            }
            
            
            
            )
            
            
            }
          
        </table>

     );
}
 
export default TablePending;