import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Six = () => {
   
    const [data, setData] = useState(null)
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts/1')
       .then((res)=>{setData(res.data)})
       .catch((err)=>{console.error(err)
       })
    },[])

  return (
    <>
    {
        data?(
            <div>{data.title}</div>
        ):(
            <h1>Loading.......</h1>
        )
    }
    </>
  )
}

export default Six