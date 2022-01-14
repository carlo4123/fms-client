
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAdmin from './admin.create';
import TableTab from './components/table-tab';
import Dashboard from './dashboard';
import Footer from './footer';
import Home from './home';
import Login from './login';
import Navbar from './navbar';
import './style/index.scss';
import TechnicalDivision from './technical-division';
import Tracking from './tracking';
import Transaction from './transaction';
import UserCreate from './userCreate';
import UserTable from './userTable';

function App() {

  const [user,setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: ''
  })
  
  const jwt = localStorage.getItem('jwt')

useEffect(()=>{
  if(jwt){
    axios.post('http://localhost:5000/',{jwt})
    .then(res=>{
       setUser(res.data)
    })
   
    .catch(err => console.log(err))
  }
 
},[jwt])


  console.log(user)




  return (
    <Router>
      <Fragment>  
    <div className="App">
      <div className="main">
      <Navbar user={user} setUser={setUser} />

      <div className="container">
        <div className="blue-wrapper">  
      
        <Routes> 


        {!user.email &&
        <Route path="/" exact  element={<Home />}/> 
        }
        

        {user.email &&
        <Route path="/dashboard"element={<Dashboard  user={user}/>} />
        } 

       


        {!user.email &&
        <Route path="/login" element={<Login user={user} setUser={setUser} /> }/>
        }


        {user.email &&
        <Route path="/table"  element={<TableTab accountType={user.accountType}/>} />
        }
         <Route path="/tracking"  element={<Tracking />} />
        <Route path="/tracking/:casenumber"  element={<Transaction />} />
        <Route path="/technical-division"  element={<TechnicalDivision />} />
        <Route path="/transaction"  element={<Transaction />} />
        {user.accountType === "moderator" &&
        <Route path="/admin/create"  element={<CreateAdmin />} />
        }
        {user.accountType !== "moderator" &&
        <Route path="/register"  element={<UserCreate />} />
        }



        {user.accountType === "user" &&
        <Route path="/user-table"  element={<UserTable user={user} />} />
        }


    
            

      
          </Routes> 

         </div>
      </div>
     
   
      </div>
      <Footer/>
    </div>
    </Fragment>  
    </Router>
  );
}

export default App;
