import React from 'react'

import './Card.scss'
import Books from './Books.jsx'


const Cards = () => {
  return (
    <div>
    <h1>Card</h1>
      <div className='card'>
      
      <div className='card-container'>
      {
        Books.map((i)=>{
          return(
            <div className='card-item'>
              <p>Author:{i.author}</p>
              <img src={i.imageLink} alt="yash" className='img'/>
              <p>Pages:{i.pages}</p>
              <p>Title:{i.title}</p>
              <p>Year:{i.year}</p>

            </div>
          )
        })
      }
      </div>
      </div>
      
      
    </div>
  )
}

export default Cards