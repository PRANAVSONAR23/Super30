import React, { useEffect, useState } from 'react'

const Seven = () => {
    const [time, setTime] = useState(10)

    useEffect(()=>{
        if(time>0){
            setTimeout(()=>{
             setTime(time-1);
            },1000)
            return ()=>clearTimeout(time);
         }
    },[time])

    

    
  return (
    <>
    {time}
    
    </>
  )
}

export default Seven