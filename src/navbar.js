import { useState } from 'react';
import { AiFillCar } from 'react-icons/ai';
import { BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineLogout, MdPostAdd } from 'react-icons/md';
import { VscChecklist } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import logo from './assets/logo.png';
const Navbar = ({user,setUser}) => {
   
   const [openMenu,setOpenMenu] = useState(false)

   const menuHandler = () =>{
   
            setOpenMenu(!openMenu)  
        
   }


   const handleLogout = () =>{
    const cookies = new Cookies();
     console.log("click logout")
    localStorage.removeItem('jwt')
    cookies.remove('jwt', '', {expires: 1})
    setUser("")
   }
 
    return ( 
    <div className="navbar">
        <div className="navbar-container">
            <NavLink to={!user.email ? "/" : "/dashboard"} className="brand">
                <img src={logo} alt="" className="brand-logo" />
                <div className="brand-name">FMS Portal</div>
            </NavLink>

            <FiMenu  className="navbar_menu-button" onClick ={() =>menuHandler() }/>

            <div className={(openMenu) ? "navbar_menu active" : "navbar_menu"}>
                  
                    {user.email &&
                    <NavLink to="/dashboard" className="navbar_link">
                        <BsFillPersonPlusFill  className="navbar_link-icon"/>
                        <span className="navbar_link-text">dashboard</span>
                    </NavLink>
                    }       
                   
                    <NavLink to="/tracking" className="navbar_link">
                    <VscChecklist className="navbar_link-icon"/>
                        <span className="navbar_link-text">tracking</span>
                    </NavLink>
             
                   
                    {(user.accountType ==="admin_ismd" ||
                     user.accountType ==="admin_legal" ||
                     user.accountType ==="admin_ob"  ||
                     user.accountType ==="admin_oc"  ||
                     user.accountType ==="admin_oed"  ||
                     user.accountType ==="admin_docket" 
                    )
                     &&
                    <NavLink to="/table" className="navbar_link">
                        <BsFillPersonFill  className="navbar_link-icon"/>
                        <span className="navbar_link-text">table</span>
                    </NavLink>
                    }
                    {user.accountType ==="admin_td" &&
                    <NavLink to="/technical-division" className="navbar_link">
                        <MdPostAdd  className="navbar_link-icon"/>
                        <span className="navbar_link-text">Technical Division</span>
                    </NavLink>
                   }
                    {user.accountType ==="moderator" &&
                    <NavLink to="/admin/create" className="navbar_link">
                        <BsFillPersonFill  className="navbar_link-icon"/>
                        <span className="navbar_link-text">Create Admin</span>
                    </NavLink>
                    }
                    {!user.email &&
                     <NavLink to="/login" className="navbar_link">
                     <BsFillPersonFill  className="navbar_link-icon"/>
                     <span className="navbar_link-text">login</span>
                 </NavLink>
                    }
                 {user.accountType === "user" &&
                <NavLink to="/user-table" className="navbar_link">
                     <AiFillCar  className="navbar_link-icon"/>
                     <span className="navbar_link-text">units</span>
                 </NavLink>
                }


                  
                   
                     {user.email &&
                    <Link to="/login" className="navbar_link" onClick={() => handleLogout()}>
                         <  MdOutlineLogout  className="navbar_link-icon"/>
                        <span className="navbar_link-text">  logout</span>
                    </Link>
                    }
             
                </div>
        </div>
    </div>


     );
}
 
export default Navbar;