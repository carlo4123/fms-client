
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
const PrintDocu = ({data}) => {

    const {units} = data
    console.log("units",units)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    return ( 
 
  
      <div className="col-md-12" >
      <button onClick={handlePrint} className="print__button">  Print </button> 
      <div className="hide-print">
        <div ref={componentRef}  className="">
        <div className="print">
            <div className="print-header">
            <p>Republic of the Philippines</p>
            <p>Department of Transportation</p>
            <p className="bold-text">LAND TRANSPORTATION FRANCHISING AND REGULATORY BOARD</p>
            <p>East Avenue, Quezon City</p>
            </div>
        

<div className="print-row-1">
    <div className="print-name">
   <p> {data.companyName}	</p> 							
       <p>Applicant </p> 
    </div>

    <div className="print-casenumber">
    CASE NO. {data.casenumber}
    </div>

</div>


<div className="print-row-2">
<p>Application for Extension of Validity</p>
<p>of a Certificate of Public Convenience to</p>
<p>Operate a <strong className="bold-text">TAXI AIRCONDITIONED</strong>  Service</p>


</div>

<p  >x-----------------------------------------------------x</p>
<p>operating under the Name & Style of:</p>
<p>“ PROVERBS 2:6 TRANSPORT SERVICES”—WHITE</p>

<div className="decision">
D E C I S I O N
</div>

<p>   
       <span className="space-1"></span>     This is an application for Extension of Validity of a Certificate of Public Convenience filed on <span className="bold-text"> August 23, 2017 </span>to operate <span className="bold-text">{data.vehicle}
           </span>  service within MANILA and from said place to any point in the island of Luzon accessible to motor vehicle traffic and vice-versa, with the use of <span className="bold-text">ONE (1) unit</span>  which is valid up to <span className="bold-text">SEPTEMBER 12, 2017. </span> 
               
</p>
<br />
	<p>
    <span className="space-1"></span> 
    In compliance with the requirements of notice and publication, applicant submitted the affidavit of publication issued by the <span className="bold-text">PEOPLE’S BALITA,</span>  a newspaper clipping of the notice as published and the page of the newspaper where said notice appeared. Notwithstanding its publication, no one filed any written opposition nor appeared at the hearing to controvert the application. Hence, said application is considered uncontested.
    </p>
    <br />
    <p>
    <span className="space-1"></span> 
	From the evidence submitted it shows that applicant is a <span className="bold-text">FILIPINO CITIZEN;</span>  that applicant is capable to meet the finances and responsibilities incident to the continuation of the operation of an <span className="bold-text">{data.vehicle}</span>  service; and that the service will promote public interest in a proper and suitable manner in view of the increase of populations and business establishments on the route since the Certificate of Public Convenience was granted.
    </p>
    <br />
    <p>
    <span className="space-1"></span> 

	<span className="bold-text"> WHEREFORE,</span> by virtue of Section 16(a) of Commonwealth Act No. 146, as amended, and Executive Order No. 202, dated June 19, 1987, this Board hereby <span className="bold-text"> APPROVES</span> the aforesaid application. Accordingly, let a Certificate of Public Convenience be issued in favor of the applicant, with authority to operate a <span className="bold-text">{data.vehicle}</span>service within <span className="bold-text"> MANILA </span>  and from said place to any point in the island of Luzon accessible to motor vehicle traffic and vice-versa with the use of ONE (1) unit described hereunder to wit:
    </p>
	<br />

    <div children="print-table" >
  <div className="print-tr">
    <th>  MAKE</th>
    <th>MOTOR NO.</th>
    <th>CHASSIS NO.</th>
    <th>PLATE NO.</th>
    <th>YEAR MODEL</th>
  </div>
 
{units.map((unit,index) =>{
  return(
<div className="print-tr">
    <td>{unit.make} </td>
    <td>{unit.motorNumber}</td>
    <td>NCP929012679</td>
    <td> {unit.plateNumber}</td>
    <td> {unit.yearModel}</td>
  </div>
  )
  
})}
 
  
</div>
<br />
<br />
       <p>
       <span className="space-1"></span> 
       Applicant is herby required to register the herein authorized unit under <span className="bold-text">{data.vehicle}</span>  service denomination with the <span className="bold-text">PILOT AGENCY</span>  of the Land transportation Office (LTO) and to show proof of compliance therewith to the Information Systems and Management Division (ISMD) within thirty (30) days from receipt of this Decision.
       </p>
       <br />

       <p>
       <span className="space-1"></span> 
       In the operation of the service and within the validity of the Certificate of Public Convenience, the operator shall observe and comply strictly with the requirements for public transport services and with any provincial resolution, municipal or city ordinance or traffic regulation and to conform to the duties imposed upon by virtue of the franchise and the Public Service Law.
       </p>
       <br />
       <p>
       <span className="space-1"></span> 
	The Certificate of Public Convenience issued by virtue of this Decision shall be valid and subsisting only for a period up to SEPTEMBER 12, 2022, shall be subject to further amendment by the Board in accordance with Department Order 2017-11 and the Public Utility Vehicle (PUV) Modernization Program.
    </p>
<br />
    <p>
       <span className="space-1"></span> 
This Decision takes effect immediately and shall become final thirty (30) days after due notice to the applicant.
</p>

<div className="print-order">
SO ORDERED.
</div>


<div className="print-city">
Quezon City, Metro Manila.
</div>
	


<div className="print-atty">
    <div className="print-atty--1" >
        <p>
        ATTY. MARTIN B. DELGRA, III
        </p>
   <p>Chairman</p>

    </div>

    <div className="print-atty--2">
        <p> ENGR. RONALDO F. CORPUS	</p>
   <p>Board Member</p>
    
    </div>

    <div className="print-atty--3">
        <div>
        <p>ATTY. AILEEN LOURDES A. LIZADA</p>
    <p>   Board Member</p>
        </div>
    
 
    </div>
</div>




		<div className="last-row">
            <div>
            <p className="print-attested"> Attested by:</p>
            <div className="print-atty--4">
            <p>ATTY. CARL SHA JEMIMAH F. MARBELLA</p>
        <p> Office of the Executive Director</p>
            </div>
      
                                                    
            </div>
         
  
        </div>

          	          	                
        </div>
      </div>
      </div>
      </div>
     ); 
}
 
export default PrintDocu;