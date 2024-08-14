import React from 'react'
import { useParams } from 'react-router-dom'


const Contacts = () => {
    const param=useParams()
  return (
    <div>Contact {param.id}</div>
  )
}

export default Contacts