import React, { useState } from 'react'

const CustomCounter = () => {

  const [count, setCount] = useState(0)

  
  return (
    <div>
      <h1>Custom Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment by 5</button>
      <button onClick={() => setCount(prevCount => prevCount - 5)}>Decrement by 5</button>
      <button onClick={() => setCount(prevCount => prevCount + 2)}>Increment by 2</button>
      <button onClick={() => setCount(prevCount => prevCount - 2)}>Decrement by 2</button>

    </div>
  )
}

export default CustomCounter