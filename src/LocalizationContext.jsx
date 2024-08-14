import { createContext, useContext, useState } from "react";

const LocalizationContext=createContext();

const LocalProvider=({children})=>{
  
    const thestring={
      en:{
         greeting:"Hello World ",
         welcome:"Welcome to app"
      },
      es:{
        greeting:"hola amigo ",
        welcome:"wedome mi aplicacion"
      }
    }
    const [locale, setlocale] = useState('en');
    
    const translate=(key)=>{
     return thestring[locale][key]
    }


    return <LocalizationContext.Provider value={{locale,setlocale,translate}}>
        {children}
    </LocalizationContext.Provider>
}
 

export function useLocal(){
 return useContext(LocalizationContext);
}
export default LocalProvider;