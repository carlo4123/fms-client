import axios from "axios";
import { useEffect, useState } from "react";
import { BsCheckCircleFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";

const Transaction = () => {

    const { casenumber } = useParams();
  
    const [tracking, setTracking] = useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/casenumber/find/'+casenumber)
        .then(res=> setTracking(res.data.tracking))
        .catch(err=> console.log(err))
    },[])

    console.log("tracking",tracking)

    return ( 

        <div className="transaction">
            <div className="transaction-container">

            
            <h2 className="heading-2">
                Franchise Tracking 
            </h2>
            <h3 className="transaction-casenumber">casenumber: { tracking ? casenumber : casenumber} </h3>
            <div className="transaction-box">
            {!tracking ? <h1>Casenumber Doesn`t exists</h1> : tracking.map((each,key) => {
                return(
                   
                    
                    
                    <div className="transaction-items">
                    <div className="transaction-items_date">Date: {each.date.slice(0,10)}</div>
               
                    <div className="transaction-items_icon-wrapper">
                   
                    <BsCheckCircleFill className="transaction-items_icon"/>
                    </div>
               
                  <div>{each.message}</div>
                  </div>
                 
                )
                }
                
                ) }
                 </div>
        

           
                 </div>
        </div>
     );
}
 
export default Transaction;