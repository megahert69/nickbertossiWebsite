import React from 'react'
import { MediaList } from '../helpers/MediaList'
import MediaItem from '../components/MediaItem'
import '../styles/Media.css'

function Media() {
  return (
    <div className='media'>
        <h1 className='mediaTitle'>GIG HIGHLIGHTS</h1>
        <div className='mediaList'>
            {MediaList.map((mediaItem, key) => {
            return (
                <MediaItem 
                    key={key}
                    event={mediaItem.event}
                    promoter={mediaItem.promoter}
                    location={mediaItem.location}
                    image={mediaItem.image}
                />
                )
            })}
        </div> 
        <div className='soundcloud'>
        </div> 
    </div>
  );
}

export default Media
