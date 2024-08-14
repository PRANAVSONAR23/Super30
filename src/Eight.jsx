import React, { useState } from 'react'

const Eight = () => {
    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState("")
    
    function submitHandler(){
        let temp=[...todos,currentTodo];
        setTodos(temp)
        setCurrentTodo('');
    }

    function deleteHandler(i){
       const updated=todos.filter((_,t)=>t!==i);
       setTodos(updated);
       
    }


  return (
    <>
    <input type='text' placeholder='enter task' value={currentTodo} onChange={(e)=>{setCurrentTodo(e.target.value)}}></input>
    <button type='submit'  onClick={submitHandler}>ADD TASK</button>

    <div >
      {
        todos.map((t,i)=>(
            <div key={i} className='flex gap-3'>
            <div>{t} </div>
            <button onClick={()=>{deleteHandler(i)}} >Delete</button>
            </div>
        ))
      }

    </div>
    </>
  )
}

export default Eight