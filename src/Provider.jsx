import React, { useState } from 'react'
import MyContext from './MyContext'

const Provider = ({children}) => {

  const[open,setOpen] = useState(false)
  return (
 <MyContext.Provider value={{open,setOpen}}>
{children}

 </MyContext.Provider>
  )
}

export default Provider