import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./table";
import TableApprove from "./table-approve-components/table-approve";
import TableDone from "./table-done-components/table-done";
import TablePending from "./table-pending";


const TableTab = ({accountType}) => {


    const [pending, setPending] =useState(null)
    const [done, setDone] =useState(null)
    const [toApprove, setToApprove] =useState(null)
    const [toDo, setToDo] =useState(null)
    const [data, setData] = useState()
    const [tabs, setTabs] = useState(1)
  

        useEffect(()=>{
          
            const fetch = async () =>{
                try {
                  const res =  await axios.get('https://fms-backend-portal.herokuapp.com/casenumber')
                    setData(res.data)

                    if(data){
                        const res = data.filter( each => 
                             each.location.division === accountType && 
                             !each.location.received &&  
                             !each.readyToRelease &&
                             !each.readyToApproved )

                       !pending ? setPending(res) : setPending(res)   
                      
                        const resToDo =   data.filter( each =>
                             each.location.division === accountType &&
                             each.location.received &&
                             !each.readyToRelease &&
                             !each.readyToApproved  )
                       
                        !toDo ? setToDo(resToDo)  : setToDo(resToDo)
                        
                        const resToApprove =   data.filter( each => each.readyToApproved && !each.readyToRelease  )
                      
                       !toApprove ? setToApprove(resToApprove)  : setToApprove(resToApprove)
                        
                       const resDone =   data.filter( each => each.readyToRelease  )
                  
                     !done ? setDone(resDone)  : setDone(resDone)
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

                <div className="tabs-wrapper">
                    <div className={tabs===1 ? "tabs active" : "tabs"} onClick={() => handlingTab(1)}>
                        To do
                    </div>
                    <div className={tabs===2 ? "tabs active" : "tabs"}  onClick={() => handlingTab(2)}>
                        Pending
                    </div>
                    {accountType === "admin_ismd" &&
                    <div className={tabs===3 ? "tabs active" : "tabs"}  onClick={() => handlingTab(3)}>
                        For Releasing
                    </div>
                    }
                    <div className={tabs===4? "tabs active" : "tabs"}  onClick={() => handlingTab(4)}>
                        Done
                    </div>
                </div>

                <div className="tab-content-wrapper">
                    
                    <div className={tabs===1 ? "tabs-content active" : "tabs-content"}>
                    <Table  todoData={toDo} accountType={accountType}/>
                    </div>
                     
                    <div className={tabs===2 ? "tabs-content active" : "tabs-content"}>
                    <TablePending  pending={pending} accountType={accountType}/>
                    </div>

                 
                    <div className={tabs===3 ? "tabs-content active" : "tabs-content"}>
                    <TableApprove toApprove={toApprove} />
                    </div>

                    <div className={tabs===4 ? "tabs-content active" : "tabs-content"}>
                    <TableDone  done={done}/>
                    </div>
                    
                    
                   
                </div>

                    
                    
                </div> 
        </div>
        </div>
         
     );
}
 
export default TableTab;