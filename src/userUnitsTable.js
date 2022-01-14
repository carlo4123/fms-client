import axios from "axios";
import { useEffect, useState } from "react";

const UserUnitsTable = ({user}) => {
    const id = user._id

   const [fetchUnits,setFetchUnits] = useState();

    useEffect(()=>{
     const  fetchUnit = async () => {

        try {
            const res = await axios.post('http://localhost:5000/account-type/populate',{casenumber: id})

            console.log("result",res)
            setFetchUnits(res.data.units)
        return res.data
        } catch (error) {
            console.log(error)
        }
           
        }

        fetchUnit()

    },[])
console.log("fetch",fetchUnits)
    
    return ( 
        <div className="table-wrapper">
            
        <table className="table">
            <thead>
            <tr className="table-row">
            <th className="table-header">Case No.</th>
            <th className="table-header">Make</th>
            <th className="table-header">motor no.</th>
            <th className="table-header">company / operator name</th>
            <th className="table-header">plate no.</th>
            <th className="table-header">Vehicle</th>
            <th className="table-header">route</th>
            <th className="table-header">year model</th>
            <th className="table-header">date granted</th>
            <th className="table-header">date expiry</th>
            
          
           
            </tr>
            </thead>
        <tbody>
            {!fetchUnits ? "No units found on your account" :

            fetchUnits.map((each,index)=> {
                return (
                   
                
                    each.units.map((sub,subIndex) =>{
                       return(
                        <tr className="table-row" key={subIndex} >
                        <td className="table-data">{each.casenumber}</td>
                        <td className="table-data">{sub.make}</td>
                        <td className="table-data">{sub.motorNumber}</td>
                        <td className="table-data">{each.companyName}</td>
                        <td className="table-data">{sub.plateNumber}</td>
                        <td className="table-data">{each.vehicle}</td>
                        <td className="table-data">{`from ${each.routeFrom} to ${each.routeTo}`}</td>
                        <td className="table-data">{sub.yearModel}</td>
                        <td className="table-data"></td>
                        <td className="table-data"></td>
                        </tr>
                       )
                        
    
                    })
                   
                )
               
            
                
                
                
            
            })
        }
           
        
            
        </tbody>
       
      
        </table>

        </div>


     );
}
 
export default UserUnitsTable;