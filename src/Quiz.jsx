import React, { useState } from 'react'

const Quiz = () => {
const[a,setA]=useState(false)
const[b,setB]=useState(null)


const handlec = (i) =>{
  setA(!a)
  setB(i)
}
const handleo = (i) =>{
  setA(!a)
  setB(null)
}
  const Data = [
    {
      id:1,
      q:'q1',
      a:[1,2,3,4]
    },
    {
      id:2,
      q:'q2',
      a:[1,2,3,4]
    }
  ]
  return (
    <div>

{
Data.map((i)=>{
  return(
    <>
    <p onClick={()=>{b!==i.id?handlec(i.id):handleo(i.id)}}>{i.q} { b!==i.id ?'+':'-'}</p>

    {i.a
   
    .map((s)=>{
      return(
        <>
        {a && s===b && <p>{s}</p>
        
        }
        </>
      )
    })
  

    }
    </>
  )
})
  

}
    </div>
  )
}

export default Quiz