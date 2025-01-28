import React, { useState } from 'react'
import "./Home.css"

const Homes = () => {
  const [open,setOpen] = useState(false)

  const handle = () => setOpen(!open)
  return (
    <div className='modal'>
      <button onClick={handle}>modal</button>

{ open &&
      <div className='modal-main'>

        modal content
      </div>

}
    </div>
  )
}

export default Homes