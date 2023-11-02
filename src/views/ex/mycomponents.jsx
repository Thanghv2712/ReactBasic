import React, { useState } from 'react'
import Childcomponent from './childcomponent';

const Mycomponents = () => {
  
    const [state , setState] = useState({
      name: "",
      pass : "",
      arrJobs:  [
      { id : 1 , title : "Sách Toán" , price : "500 $"   },
      { id : 2 , title : "Sách Hoá" , price : "200 $"   },
      { id : 3 , title : "Sách EngLish" , price : "100 $"   }
      ]
    })
    console.log("call state : " , state);

    const onHandleName = (e)=>{
        setState({
          ...state ,
          name: e.target.value
        })

    }
    const onHandlePass = (e)=>{
      setState({
        ...state ,
        pass : e.target.value
      })
    }
    const onHandleSM = (e)=> {
        e.preventDefault();
        console.log("check data :" , state);

    }

  return (
    <div>
        <label htmlFor="">Tài Khoản</label> <br />
        <input type="text" value={state.name} onChange={(e)=> onHandleName(e)}/> <br />
        <label htmlFor="">Mật Khẩu</label> <br />
        <input type="password" value={state.pass} onChange={(e)=> onHandlePass(e)}/> <br />
        <button type='submit' onClick={(e)=> onHandleSM(e)}>Đăng NhẬP</button>
        

        <Childcomponent 
          // name = {state.name} 
          // pass = {state.pass}
          arrJobs = {state.arrJobs}
        
        />


    </div>
  )
}

export default Mycomponents