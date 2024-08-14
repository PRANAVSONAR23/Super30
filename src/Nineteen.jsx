import React from 'react'
import { useTheme } from './ThemeContex'

const Nineteen = () => {
    const{isDark,toogleTheme}=useTheme();
  return (
    <>
    <label htmlFor="">
        <input type="checkbox" checked={isDark} onChange={toogleTheme} />
        
    </label>
    </>
  )
}

export default Nineteen