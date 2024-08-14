import React, { useReducer, useState } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'ADD_TASK':{
            return [...state,{id:Date.now(),text:action.payload,completed:false}]
        }
        case 'Remove':{
            return state.filter((task)=>task.id!==action.payload)
        }
        default:
            return state
    }
}

const TwentyTwo = () => {

    const[tasks,dispatch]=useReducer(reducer,[]);
    const [tasktext, setTasktext] = useState("");

 function addTask(){
        dispatch({type:'ADD_TASK',payload:tasktext})
        
 }

  return (
  
    

    <>
    <h1>Todo list</h1>
    <input type='text' placeholder='enter task' onChange={(e)=>setTasktext(e.target.value)} ></input>
    <button onClick={addTask}>ADD</button>
    
    <div className='w-full h-5 bg-blue-400'></div>

    <ul>
        {
            tasks.map((t)=>(
                <div key={t.id}>
                    <li>{t.text} <button onClick={()=>dispatch({type:'Remove',payload:t.id})}>remove</button></li>

                </div>
            ))
        }
    </ul>
    </>
  )
}

export default TwentyTwo