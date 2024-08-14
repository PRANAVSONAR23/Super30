import React, { useState } from 'react'
import Home from './forRouter/Home';

//login form with authentication

const Thirteen = () => {

    const [status, setStatus] = useState("login")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [islogged, setIslogged] = useState(false)
    const [users, setUser] = useState([])


    const submitHandler=()=>{
      if(status==="login"){
            const user=users.find((u)=>u.username===username&&u.password===password)
            if(user){
                setIslogged(true)
            }
            else{
                alert('login fail');
            }
      }
      else{
        const newUser={username,password}
        setUser([...users,newUser]);
        localStorage.setItem('users',JSON.stringify([...users,newUser]))
        setIslogged(true);
      }
    }

    const handleLogout=()=>{
   setIslogged(false);
    }

  return (
    <>
     {islogged?(
        <div>
           <h1>Login successful </h1>
           <h1>Welcome {username}</h1>
           <button onClick={handleLogout}>Logout</button>
        </div>
     ):(
        <div>
        <div>{status}</div>
    <form  onSubmit={submitHandler}>
     <input type='text'placeholder='username' onChange={(e)=>setUsername(e.target.value)} ></input>
     <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
     <button type='submit'>{status}</button>
    </form>
    {
        status==="login"?(
            <div className='flex gap-2 bg-slate-500'>
                <span>Dont have an account</span>
                <button onClick={()=>setStatus("Register")}>Register</button>
             </div>
        ):(
            <div className='flex gap-2 bg-slate-500'>
                <span >Already have an account</span>
                <button onClick={()=>setStatus("login")}>Login</button>
            </div>
        )
    } 
        </div>
     )}
    </>
  )
}

export default Thirteen;




