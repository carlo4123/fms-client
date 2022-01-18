import TableHead from "./table-head";
import TableRow from "./table-row";
const Table = ({todoData,accountType}) => {

    return ( 
             
           
        
        <table className="table">
            <TableHead />
         {!todoData ? <h1>No Data</h1>:
          todoData.map((each,key)=>{
            return(
                <TableRow data={each} accountType={accountType} />
            )
          })
         
         }   
       
      
        </table>


     );
}
 
export default Table;