import React, { useState } from 'react'

const Text = () => {
  const [cd,setCd] =useState('')
  return (
    <div>
      <p>{cd}</p>

      <input type="text" value={cd} onChange={(e) =>setCd(e.target.value)}/>
    </div>
  )
}

export default Text