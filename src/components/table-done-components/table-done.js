import TableHead from "../table-head";
import TableRowDone from "./table-row-done";

const TableDone = ({done}) => {

    console.log("done",done)

    return ( 
        <table className="table">
            <TableHead />
        <tbody>
        {!done ? <h1>no data found</h1>:
        
        done.map((item,key )=>{
            return (
                <TableRowDone data={item}  key={key}/>
            )
        })
        
        }
       
               
            </tbody> 

            </table>
           );
}
 
export default TableDone;