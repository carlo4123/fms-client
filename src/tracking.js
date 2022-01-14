import { useState } from 'react';
import { Link } from 'react-router-dom';
const Tracking = () => {

    const [trackingNumber, setTrackingNumber] = useState('')
  
const handleChange= (e) =>{
    setTrackingNumber(e.target.value)
}
    
    return ( 
        <div className="tracking-container">

            <div className="tracking-wrapper">
                <div className="tracking-heading">
                    FMS TRACKING
                </div>
                <div className="tracking-heading">
                {/* {trackingNumber} */}
                </div>
                <form action="" className="tracking-form">
                <input type="text" onChange={(e)=>handleChange(e)} className="input" placeholder="tracking number"/>
                <Link to={`/tracking/${trackingNumber}`} className="button button-primary">Track</Link>
                </form>

            </div>
        </div>

     );
}
 
export default Tracking;