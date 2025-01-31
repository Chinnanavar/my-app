import React, { useState } from 'react'
import NewComp from './NewComp';

const Memo = () => {

  const [count, setCount] = useState(0);
  const [input,setinput] = useState("");

  function handleinput(e){
    setinput(e.target.value)
  }
  return (
    <div>Memo
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <br />
    <input type='text' value={input} onChange={handleinput}/>
    <hr />
    <NewComp newCount={count}/>
    </div>
  )
}

export default Memo