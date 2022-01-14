import SendModals from "../modals/send.modal";
import PrintDocu from "../print/print";

const TableRow = ({data, accountType}) => {
const {units} = data
// console.log("units",units)

 
//    const [modal1, setModal1] = useState(false)
  
 
    return ( 
        <tbody>

     {!units ? <h1>No Units</h1> : 
     
     units.map((unit,key)=>{
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
            <td className="table-data"></td>
            <td className="table-data"></td>
            {accountType=== "admin_legal" &&
            <td className="table-data">
               <PrintDocu data={data} />
            </td>
        
         }
           
            
     
           <SendModals key={key} id={data._id} casenumber={data.casenumber}/>
           
            
        </tr>
        )
     })
     }
        
  
        </tbody>
     );
}
 
export default TableRow;