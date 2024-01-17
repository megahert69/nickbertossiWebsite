import React from 'react'

function MediaItem({ event, promoter, location, image}) {
  return (
    <div className='mediaItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{event}</h1>
        <p>{promoter}</p>
        <p>{location}</p>
        
    </div>
  )
}

export default MediaItem
