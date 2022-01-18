import axios from "axios";

const TableRowApprove = ({data}) => {

    const {units} = data
  

    var currentdate = new Date(); 

    const dateFunction = (dateNow) => {
        let date =""
        switch (dateNow) {
            case "granted":
                 date +=   currentdate.getDate()  + "-"
                        + (currentdate.getMonth()+1)  + "-" 
                        + currentdate.getFullYear() 
                break;
            case "expiry":
                date +=   currentdate.getDate()  + "-"
                        + (currentdate.getMonth()+1)  + "-" 
                        + ((currentdate.getFullYear() + 5))
                break;
        
            default:
                break;
        }

        return date

    }

    const granted = dateFunction("granted")
    const expiry = dateFunction("expiry")
 
    const tracking = {
        tracking:{
            where: "admin_ismd",
            message: "your documents is ready for releasing"
        }
    }

  
     const   set = {
           readyToRelease: true,
           dateGranted: granted,
           dateExpiry: expiry
       }

   const params = [set,tracking]

    const handleApprove = async (e,id) =>{
     
        try {
          const res = await axios.patch('https://fms-backend-portal.herokuapp.com/casenumber/update/'+id,{params})
          if(!res){
            console.log(res.data)
          } 
    
        return res
        } catch (error) {
            console.log(error)
        }
     
     
        console.log("received")
        e.preventDefault()
    }

    return ( 
    <>
        {!units ? <h1>No Data Found</h1> : 
            units.map((unit, key) => {
                return(
                    <tr className="table-row">
                    <td className="table-data">{data.casenumber}</td>
                    <td className="table-data">{unit.make}</td>
                    <td className="table-data">{unit.motorNumber}</td>
                    <td className="table-data">{data.companyName}</td>
                    <td className="table-data">{unit.plateNumber}</td>
                    <td className="table-data">{data.vehicle}</td>
                    <td className="table-data">from {unit.routeFrom} to {unit.routeTo}</td>
                    <td className="table-data">{unit.yearModel}</td>
                    <td className="table-data">
                    </td>
                    <td className="table-data">  </td>
                    <td className="table-data"> 
                    <button  className="button button-send" onClick={(e)=> handleApprove(e,data._id)} >Approve</button> 
                    </td>
             </tr>
                )
               
          }  
          )
            }
                </>
     );
}
 
export default TableRowApprove;