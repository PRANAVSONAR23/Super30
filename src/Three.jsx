import React, { useState } from 'react'

const Three = () => {
    const [text, setText] = useState("");
  return (
   
    <>
   <input type="text"  onChange={(e)=>setText(e.target.value)} />

   <div>{text}</div>
    </>
  )
}

export default Three