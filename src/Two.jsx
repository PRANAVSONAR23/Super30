import React, { useState } from 'react'

const Two = () => {

    const [counter, setcounter] = useState(0)
  return (

    <>
    <div className='flex gap-3'>
     <div>{counter}</div>   
    <button onClick={()=>setcounter(counter+1)}>Increase</button>
    <button onClick={()=>setcounter(counter-1)} >Decrease</button>
    </div>
    </>
  )
}

export default Two