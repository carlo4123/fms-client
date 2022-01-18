
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
const PrintRelease = ({data}) => {
    const {units} =data
   console.log("print release",data)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    return ( 
 
  
      <div>
      <button onClick={handlePrint} className="print__button">  Print </button> 
      <div className="hide-print">
        <div ref={componentRef}  className="">
        <div className="print">
            <p className="fuse">FUSE UP</p>
            <br />
        <ul className="print-list">
            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    operator
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    {data.companyName}
                    </p>
                </div>
               
                <p className="print-list-item_right">
                casenumber : <span>{data.casenumber}</span>
                </p>
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    bus. address
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    
                    </p>
                </div>
               
                <p className="print-list-item_right">
                deno : <span>{data.vehicle}</span>
                </p>
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Comm. Name
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    {data.companyName}
                    </p>
                </div>
               
                <p className="print-list-item_right">
                No. of autho. units : <span>{data.units.length}</span>
                </p>
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Date Granted
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    {data.dateGranted}
                    </p>
                </div>
               
                <p className="print-list-item_right">
                Birth Date : <span>/ /</span>
                </p>
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Date Expiry
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    {data.dateExpiry}
                    </p>
                </div>
               
                <p className="print-list-item_right">
                TIN : <span></span>
                </p>
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Route Name
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    from {data.units[0].routeFrom} to {data.units[0].routeTo}
                    </p>
                </div>
               
              
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Remarks
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                    
                    </p>
                </div>
               
              
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Status
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                  FR 2000-2256 / dole 10-17-18
                    </p>
                </div>
               
              
            </li>

            
            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Tel Number
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                  
                    </p>
                </div>
               
              
            </li>

            
            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Cel Number
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                  
                    </p>
                </div>
               
              
            </li>

            <li className="print-list-item">
                <div className="print-list-item_left">
                    <p className="print-list-item_label">
                    Email Add
                    </p>
                    <span>:</span>
                    <p className="print-list-item_value">
                  
                    </p>
                </div>
               
              
            </li>

           
            </ul>
            <br />

            <p> {">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "}</p>

            <p className="units-header">identity of units</p>
            <p> {">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "}</p>
            <br />

            <div children="print-table" >
                <div className="print-tr">
                    <th>  MAKE</th>
                    <th>MOTOR NO.</th>
                    <th>CHASSIS NO.</th>
                    <th>PLATE NO.</th>
                    <th>YEAR MODEL</th>
                </div>
 
               {units.map((unit, key)=>{
                   return (
                    <div className="print-tr">
                    <td>{unit.make}</td>
                    <td>{unit.motorNumber}</td>
                    <td>NCP9290126-79{key}</td>
                    <td> {unit.plateNumber}</td>
                    <td> {unit.yearModel}</td>
                </div>
                   )
               })}
                
          
  
        </div>
        <p> {">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "}</p>
        <br />
        <br />
        <div className="verified-row">
            <p> <span>Verified by</span> : _____________________</p>
           <p><span>Date</span> : ____________</p>
        </div>
        <br />
        <div className="verified-row">
            <p> <span>Verified by</span> : _____________________</p>
           <p><span>Date</span> : ____________</p>
        </div>
        
      

       
       
      
        </div>
        
      </div>
      </div>
      </div>
     ); 
}
 
export default PrintRelease;