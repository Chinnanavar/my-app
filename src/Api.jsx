import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Api.scss'
import Data from './Json';

const Api = () => {

//   const [data, setData] = useState([]);

//   useEffect(()=>{
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(a=>setData(a.data))
//   },[])
  return (
    <div>

    <>

    <h1>dicjdijc</h1>
      {
        Data.map((i)=>{
          return(
            <div className='card'>
<h1>{i.title}</h1>
<p>{i.id}</p>
<img src={i.url} alt="" />
</div>
          )
        })
      }
      </>
    </div>
  )
}

export default Api