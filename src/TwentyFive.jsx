import React from 'react'
import { useLocal } from './LocalizationContext'

const TwentyFive = () => {
    
    const{locale,setlocale,translate}=useLocal()
  
    function change(x){
        setlocale(x);
    }
    
  return (
   <>
   <h1>{translate('greeting')}</h1>
   <h1>{translate('welcome')}</h1>
   <button onClick={()=>change('en')}>English</button>
   <button onClick={()=>change('es')}>Spanish</button>

   </>
  )
}

export default TwentyFive