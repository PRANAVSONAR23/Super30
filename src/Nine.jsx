import React, { useState } from 'react'

// background changer

const Nine = () => {
    const [color, setColor] = useState(false);

    const change=()=>{
        setColor(!color)
    }

  return (
    <>
    <div className={`w-56 h-56  ${color?"bg-red-500":"bg-black"}`} onClick={change}>the div</div>
    </>
  )
}

export default Nine  