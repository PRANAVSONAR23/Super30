import React, { useState } from 'react'

//simple search field

const Fifteen = ({items}) => {
    const [text, setText] = useState("");

    const filteredlist=items.filter((item)=>(
    item.toLowerCase().includes(text.toLowerCase()))
)
  
    return (        
    <>
    <input type="text" placeholder='search..' onChange={(e)=>setText(e.target.value)} />
    <ul>
        {
            filteredlist.map((t,i)=>(
                <li key={i}>{t}</li>
            ))
        }
    </ul>
    </>
  )
}

export default Fifteen