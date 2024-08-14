import React from 'react'

const Four = () => {
 
    const items=[
        {
            name:"pranav",
            quality:"Best"
        },
        {
            name:"vedant",
            quality:"good"
        },
        {
            name:"jiggi",
            quality:"nice"
        },
        {
            name:"aditi",
            quality:"Understading"
        },
        {
            name:"rohan",
            quality:"clever"
        },
        {
            name:"chinmay",
            quality:"avg"
        }
    ]

  return (
    <>
    {
       <ul className='text-center p-10 m-10'>
        {items.map((p,i)=>(
            <li key={i}>{p.name} {p.quality}</li>
        ))}
       </ul>
    }
    </>
  )
}

export default Four