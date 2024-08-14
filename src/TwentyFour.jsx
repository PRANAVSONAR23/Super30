import React from 'react'
import { useAuth } from './AuthContext'

const TwentyFour = () => {

    const{user,login,logout}=useAuth();
  return (


    <>
    {
        user?(
        <div>
            <p>{user.username}</p>
            <button onClick={()=>logout()}>Logout</button>
        </div>
        ):(
        <div>
            <button onClick={()=>login({username:"Pranav"})}>Login</button>
        </div>)
    }

    </>
  )
}

export default TwentyFour