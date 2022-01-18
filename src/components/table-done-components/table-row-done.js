import PrintRelease from "../../print/printRelease";



const TableRowDone = ({data}) => {

    const {units} = data



    console.log(data)

    return ( 
    <> 
    {!units ? <h1>No data found</h1> :

    units.map((unit,key) =>{
        return (
            <tr className="table-row" key={key}>
            <td className="table-data">{data.casenumber}</td>
            <td className="table-data">{unit.make}</td>
            <td className="table-data">{unit.motorNumber}</td>
            <td className="table-data">{data.companyName}</td>
           
            <td className="table-data">{unit.plateNumber}</td>
            <td className="table-data">{data.vehicle}</td>
            <td className="table-data">from routeFrom to routeTo</td>
            <td className="table-data">{unit.yearModel}</td>
           
            <td className="table-data">{data.dateGranted}
            </td>
            <td className="table-data"> {data.dateExpiry} </td>
            <td className="table-data">
                
                <PrintRelease data={data}/>
            </td>

          </tr>
        )
    })



   }
   
    
    
    </> 
    );
}
 
export default TableRowDone;