import React from 'react'
import { useState } from 'react'

const Toogle = () => {

  const [change,setChange] = useState(false)


  return (
    <div>
      <p> {change ? 'on' :'off'}</p>
      <button onClick={() =>setChange(!change)}>click</button>
    </div>
  )
}

export default Toogle