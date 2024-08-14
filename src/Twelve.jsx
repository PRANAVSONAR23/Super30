import React, { useState } from 'react'

//image uploader
const Twelve = () => {
 
    const [file, setFile] = useState("");
   
  return (
    <>
    <input type='file' onChange={(e)=>setFile(e.target.files[0])}></input>
    <div className='w-1/2 h-1/2'>{file?(
        <img src={URL.createObjectURL(file)} alt="" />
    ):"upload it"}</div>
    </>
  )
}

export default Twelve