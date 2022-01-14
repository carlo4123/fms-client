import TableRow from "./table-row";
const Table = ({todoData,accountType}) => {

    return ( 
             
           
        
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
            
            <th className="table-header">pdf</th>
           
            </tr>
            </thead>
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