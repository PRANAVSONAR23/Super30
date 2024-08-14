import React, { useState } from 'react'

//colour picker

const Seventeen = () => {
 const [color, setColor] = useState("#000000")

 const handleChange=(e)=>{
    setColor(e.target.value)
 }
 
    return (
    
    <>
   <input type="color" onChange={handleChange} />
   <div style={{width:'100px',height:'100px',backgroundColor:color}}></div>
    </>
  )
}

export default Seventeen