import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./table";
import TablePending from "./table-pending";


const TableTab = ({accountType}) => {


    const [pending, setPending] =useState(null)
    const [toDo, setToDo] =useState(null)
    const [data, setData] = useState()
    const [tabs, setTabs] = useState(1)
  

        useEffect(()=>{
          
            const fetch = async () =>{
                try {
                  const res =  await axios.get('https://fms-backend-portal.herokuapp.com/casenumber')
                    setData(res.data)

                    if(data){
                        const res = data.filter( each => each.location.division === accountType && !each.location.received  )
                       !pending ? setPending(res) : setPending(res)   
                      
                        const resToDo =   data.filter( each => each.location.division === accountType && each.location.received  )
                       
                        !toDo ? setToDo(resToDo)  : setToDo(resToDo)  
                     
                      }
                      
                  return res
                } catch (error) {
                    console.log(error)
                }
               

                
            }
           
            fetch()

          
        },[tabs])
     
       

    const handlingTab = index => {
        setTabs(index)
    }
 
  
    
//   data.filter( each => console.log(!each.location.division ==="admin_legal"))
   
    return ( 
        <div className="table-container">
            <div className="table-wrapper">  
                <div className="table-tab">


                {/* <div className="table-filter-wrapper">
                        <div className="table-filter-group">
                            <label htmlFor="filter-search">search: </label>
                            <input type="text"className="input" name="filter-search" placeholder="search" />
                        </div>

                        <div className="table-filter-group">
                            <label htmlFor="Denomination">vehicle: </label>
                            <select name="Denomination" className="input" id="cars">
                                <option value="volvo">All</option>
                                <option value="saab">Taxi</option>
                                <option value="mercedes">Truck</option>
                                <option value="audi">bus</option>
                                <option value="audi">puv</option>
                            </select>
                        </div>

                </div> */}
                <div className="tabs-wrapper">
                    <div className={tabs===1 ? "tabs active" : "tabs"} onClick={() => handlingTab(1)}>
                        To do
                    </div>
                    <div className={tabs===2 ? "tabs active" : "tabs"}  onClick={() => handlingTab(2)}>
                        Pending
                    </div>
                </div>

                <div className="tab-content-wrapper">
                    
                    <div className={tabs===1 ? "tabs-content active" : "tabs-content"}>
                    <Table  todoData={toDo} accountType={accountType}/>
                    </div>
                     
                    <div className={tabs===2 ? "tabs-content active" : "tabs-content"}>
                    <TablePending  pending={pending} accountType={accountType}/>
                    </div>
                    
                    
                   
                </div>

                    
                    
                </div> 
        </div>
        </div>
         
     );
}
 
export default TableTab;