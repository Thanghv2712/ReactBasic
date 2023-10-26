import React, { useState } from 'react'



const Mycomponents = () => {
  const [state , setState] = useState({
    name : "thắng con" ,
    age : 19
  })

 
const handleOnChange=(e)=>{
    setState({
      name : e.target.value ,
      age : state.age
    })
}
const HandleOnClick = ()=>{
    setState({
      ...state,
      age : state.age + 1
    })
}




  const HandleOnClickGiam =()=>{
    if (state.age > 1) {
      setState({
        ...state,
        age : state.age - 1
      })
    } else {
      console.log("lỗi tuổi k được dưới 1")
    }
   
  }


  return (
    <div>
     <div className='ten'>
      <input type="text" value={state.name}  onChange={(e)=>handleOnChange(e)}/>
      tôi tên là : {state.name}
     </div>
     <div className='tuổi'>
      năm nay tôi : {state.age} tuổi
      <button  onClick={()=> HandleOnClick()}>Tăng</button>
      <button  onClick={()=> HandleOnClickGiam()}>Giảm</button>
     </div>
    
    </div>
  )
}

export default Mycomponents