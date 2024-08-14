import React, { useState } from 'react'

const Five = () => {
    const [flag, setflag] = useState(false)
    
    function handleflag(){
      setflag(!flag)
    }
  return (
    <>
    <input type='checkbox' onChange={handleflag}/>
    <p>{flag?"on":"off"}</p>
    </>
  )
}

export default Five