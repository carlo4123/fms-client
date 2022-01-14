import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
const Home = () => {


    return ( 
        <div className="home-hero">
           <div className="heading-3">
            Franchising Managements System
            </div>
            <img className="main-logo" src={logo} alt="" />
            <div className="heading-1">
            FMS Portal
            </div>

            <p className="sub-heading">
            A front-line government agency showcasing fast and efficient 
            public service for a progressive land transport sector
            </p>
        <div className="button-group">
            <Link to="/register" className="button button-secondary">register</Link>
            <Link to="/login" className="button button-tertiary">login</Link>
        </div>
           
        </div>

     );
}
 
export default Home;