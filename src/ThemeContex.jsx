import { createContext, useContext, useState } from "react";

const ThemeContext=createContext()

const ThemeProvider=({children})=>{
    const [isDark, setIsDark] = useState(false)

    const toogleTheme=()=>{
        setIsDark((prev)=>!prev);
    }

    return(
        <ThemeContext.Provider value={{isDark,toogleTheme}}>
            {children}
        </ThemeContext.Provider>

    )
};

const useTheme=()=>{
        return useContext(ThemeContext);
}

export  {useTheme,ThemeProvider}