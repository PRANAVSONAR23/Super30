import { Link,Outlet } from 'react-router-dom'
import React from 'react'

const contactlist=[1,2,3,4,5,6]

const Contact = () => {
  return (
    <>
    <div className='flex flex-col gap-2'>
    {
        contactlist.map((item)=>(
           <Link key={item} to={`/contact/${item}`}>
            {item}
           </Link>
        ))
    }
    </div>
    <Outlet/>
    
    </>
  )
}

export default Contact