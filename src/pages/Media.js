import ReactPlayer from "react-player"
import React from 'react'
import { MediaList } from '../helpers/GigList'
import MediaItem from '../components/GigItem'
import '../styles/Media.css'

function Media() {
  return (
    <div className='media'>
        <h1 className='mediaTitle'>GIG HIGHLIGHTS</h1>
        {/* <div className='mediaList'>
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
        </div>  */}
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/bloody-mary-nick-bertossi?in=nick_bertossi/sets/top-40-edits&si=440dede396484b3991218188119237ff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div>
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/about-damn-time-nick-bertossi?si=4f085d3d9faf4fa291bedb8bca2136d6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing://soundcloud.com/nick_bertossi/bloody-mary-nick-bertossi?in=nick_bertossi/sets/top-40-edits&si=440dede396484b3991218188119237ff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div>
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/formation-nick-bertossi-mashup?in=nick_bertossi/sets/top-40-edits&si=9abed698500549d6a2832e71ed22802c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing://soundcloud.com/nick_bertossi/bloody-mary-nick-bertossi?in=nick_bertossi/sets/top-40-edits&si=440dede396484b3991218188119237ff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
          </div>
          <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/levitate-nick-bertossi-mashup?in=nick_bertossi/sets/top-40-edits&si=56246432d4854aed81ffdd6ea6319f0c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div> 
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/tension-nick-bertossi-mashup?in=nick_bertossi/sets/top-40-edits&si=ddd6e5f83fd247c28c4a715039d045b1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div> 
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/my-perogative-nick-bertossi?in=nick_bertossi/sets/top-40-edits&si=5d777a77714641cb9263680b75ed251d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div> 
        <div className='soundcloud'>
          <ReactPlayer controls height='100px' url="https://soundcloud.com/nick_bertossi/kiss-me-more-nick-bertossi?in=nick_bertossi/sets/top-40-edits&si=3ca5bc76841849cead2e21576f1365f0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div> 
    </div>
  );
}

export default Media
