import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increment, decrement, byvalue } from './state/Reducer'

const TwentySenven = () => {

    const dispatch=useDispatch();
    const data=useSelector((state)=>state.counter.value)

    const add=()=>{
        dispatch(increment())
    }
    const sub=()=>{
        dispatch(decrement())
    }
    const handlebyvalue=()=>{
        dispatch(byvalue(5))
    }
  return (
    <>
    <h1>count is:{data}</h1>
    <button onClick={add}>Increment</button>
    <button onClick={sub}>Decrement</button>
    <button onClick={handlebyvalue}>By value</button>
    </>
  )
}

export default TwentySenven