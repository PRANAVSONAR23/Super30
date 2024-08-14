import React from 'react'
import { useTheme } from './ThemeContex'

const NineteenCom = () => {
 const{isDark}=useTheme();
  return (
   <>
{
    isDark?(<div>Dark</div>):(<div>Not Dark</div>)
}
   <h1>this is used for check</h1>
   </>
  )
}

export default NineteenCom