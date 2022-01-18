import TableHead from "../table-head";
import TableRowApprove from "./table-row-approve";

const TableApprove = ({toApprove}) => {

    
  console.log("table approve",toApprove)
    
    return (  
        
        <table className="table">
        <TableHead />
        <tbody>
           
        {!toApprove ? <h1>No Data found</h1> :
        
        toApprove.map((item,key) =>{
            return(
                <TableRowApprove data={item} key={key}/>  
            ) } )
         }
        
     
        </tbody> 
            </table>
           );
}
 
export default TableApprove;