import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './state/todoSlice'
import { removeTodo } from './state/todoSlice'

const Todo = () => {

    const [todo, setTodo] = useState("")

    const dispatch=useDispatch();
    const data =useSelector((state)=>state.todos)

    const adder=()=>{
        dispatch(addTodo(todo))
    }

    const deleter=()=>{
        dispatch(removeTodo(todo))
    }


  return (
   <>
   <div>
    <h1>TODO</h1>

    <input type="text" placeholder='add task' onChange={(e)=>setTodo(e.target.value)}/>
    <button onClick={adder}>Add</button>

    <div>
        {
            data.map((item)=>{
                return(
                    <div key={item}>
                        <h1>{item}</h1>
                        <button onClick={deleter}>delete</button>
                    </div>
                )
            })
        }
        
    </div>


   </div>
   </>
  )
}

export default Todo