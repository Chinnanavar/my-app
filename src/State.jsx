import React, { useState } from 'react'

const State = () => {

  const[open,setOpen]=useState(false)
  const[a,setA]=useState('')

  // useEffect(()=>{
  //   if(a.length>3){
  //     setOpen(true)
  //   }
  //   else{
  //     setOpen(false)
  //   }
  // })

const handlec = (e) =>{
  setA(e.target.value)
  setOpen(true)
 
}

  const Data = [
    {
      id: 1,
      name: 'india',
      state:[
        {
          id: 1,
          name: 'tamilnadu',
          cities:[
            {
              id: 1,
              name: 'chennai'
    },
            {
      id: 2,
      name: 'coimbatore'

    },
  ]
       
        },

        {
          id: 2,
          name: 'kerala'
        }
      ]

    },
    {
      id: 2,
      name: 'usa',
      state:[
        {
          id: 1,
          name: 'california'
        },
        {
          id: 2,
          name: 'texas'
        }
      ]
    }
  ]
  return (
    <div>
      <select onChange={handlec}>
      <option disabled selected>select a country</option>
 {    
 Data

 .map((o)=>{
  return(
    <> 
    <option key={o.id} value={o.name}>{o.name}</option> 
    <input onChange={handlec}/>

   
    </>
  )
 }) 
  } 
    </select> 

{
open&&
      <select>
      <option disabled selected>select a state</option>
{Data
    .filter(i=>i.name===a)
.map((o)=>{
  return(

    <>
    {

      o.state
    
      .map((i)=>{
        return(
          <option>{i.name}</option> 
        )
      })

    }
    
    
    </>
   
  )
})

}
</select>

}


    </div>
  )
}

export default State