import React, { useEffect, useState } from 'react'

const Eleven = () => {

    const quotes=["quote1","quote2","quote3","quote4","quote5","quote12","quote6","quote7","quote8","quote9","quote10","quote11"];
    
   function  getRondomIndex(){
    const index=Math.floor(Math.random()*10+1);
    return index;
   }

   const [quote, setQuote] = useState("");

   useEffect(()=>{
     let idx=getRondomIndex();
     const q=quotes[idx];
     setQuote(q);
   },[])
  return (      
   <>
   <div>quotes are:</div>
   {quote}
   </>
  )
}

export default Eleven