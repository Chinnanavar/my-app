import { Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const App = () => {

  const{name} =useParams()
  
  return (
    <div>
      <h1>{name}
      <Button variant="contained">Contained</Button></h1>

      {
        name==='yash' ? <h1>dob:jdncdncj</h1>:
        <h1>no user found</h1>
      }

      
    
    </div>
  )
}

export default App