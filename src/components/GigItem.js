import React from 'react'

function GigItem({ event, promoter, location, image}) {
  return (
    <div className='gigItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{event}</h1>
        <p>{promoter}</p>
        <p>{location}</p>
        
    </div>
  )
}

export default GigItem
