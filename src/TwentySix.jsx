import React from 'react'
import { useForm } from 'react-hook-form'

const TwentySix = () => {

    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();

    const sub=async(data)=>{
     await new Promise((resolve)=>setTimeout(resolve,1000));
     console.log(data);
    }





  return (
    <>
    <form onSubmit={handleSubmit(sub)}> 
        <input type='text' placeholder='enter email' {...register('email',{
            required:"email required",
            validate:(t)=>t.includes("@"),
        })}/>   
        {errors.email && <div>{errors.email.message}</div>}
        <input type='text' placeholder='password' {...register('password',{
            required:"password is required",
            minLength:8,
        })}/>
        {errors.password && <div>{errors.password.message}</div>}
        <button type='submit' disabled={isSubmitting}>{isSubmitting?"Loading":"Submit"}</button>
    </form>
    </>
  )
}

export default TwentySix