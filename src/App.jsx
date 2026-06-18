import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserData] = useState([])
  async function  getdata() {
    let response=await axios.get("https://picsum.photos/v2/list?page=2&limit=200")
    

    
     setUserData(response.data)
     console.log(response.data);
     
  } 
  useEffect(function(){
  getdata()
  },[])

  let printUserdata="User is not available"

 
    if(userdata.length>0){
      printUserdata=userdata.map((e)=>{
        return <a href={e.url} target='_blank'>
          <div>
          <div className='w-40 h-40'><img className='h-full w-full object-cover' src={e.download_url} alt="" /></div>
          <h1>{e.author}</h1>
        </div>
        </a>
      })
    }
  return (
    <div className='h-screen bg-black p-5 overflow-auto'>
      

      <div className='text-white flex flex-wrap gap-3 '>
        {printUserdata}
      </div>
    </div>
   
  )
}

export default App
