import { createContext, useContext, useState } from "react";

const AuthContext=createContext();

const AuthProvider=({children})=>{

    const [user, setuser] = useState(null)

    const login =(userdata)=>{
      setuser(userdata);
    }
    const logout=()=>{
        setuser(null);
    }
 

    return <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext);
}

export default AuthProvider;

