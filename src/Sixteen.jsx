import React, { useState } from 'react'

//pagination

const Sixteen = ({items,itemsperpage}) => {
    const [currentpage, setCurrentpage] = useState(1)

    const indexofLastItem=currentpage*itemsperpage;
    const indexofFirstItem=indexofLastItem-itemsperpage;

    const filteredlist=items.slice(indexofFirstItem,indexofLastItem);


  return (
    <>
    <ul>
        {
            filteredlist.map((t,i)=>(
                <li key={i}>{t}</li>
            ))
        }
    </ul>

    <button onClick={()=>setCurrentpage(currentpage+1)} disabled={indexofLastItem >= items.length}>Next</button>
    <button onClick={()=>setCurrentpage(currentpage-1)}  disabled={currentpage === 1} >Prev</button>
    </>
  )
}

export default Sixteen