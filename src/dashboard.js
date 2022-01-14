import { BiCar } from 'react-icons/bi';
import { CgClipboard } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
const Dashboard = ({user}) => {
    return ( 
        <div className="dashboard">
            <img src={logo} alt="" className="dashboard-logo" />
            <h1 className="heading-1">
                WELCOME, {user.firstName}
            </h1>
            

        {user.accountType === "user" && 
        <div>
<h3 className="dashboard-sub-heading">
        What would you like to do?
    </h3>
        <div className="dashboard-nav">
        <Link to="/tracking" className="dashboard-nav_link">
            <CgClipboard className="dashboard-nav_link-icon" />
            <div className="dashboard-nav_link-text">tracking</div>
        </Link>

        <Link to="/user-table" className="dashboard-nav_link">
            <BiCar className="dashboard-nav_link-icon"/>
            <div className="dashboard-nav_link-text">units</div>
        </Link>
        </div>
        
    </div>
        
        
        }
           

        </div>

      );
}
 
export default Dashboard;