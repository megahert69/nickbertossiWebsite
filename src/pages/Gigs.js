import React from 'react'
import GigItem from '../components/GigItem'
import { GigList } from '../helpers/GigList'
import '../styles/Gigs.css'

function Gigs() {
  return (
    <div className='gigs'>
    <h1 className='gigTitle'>GIG</h1>
    <div className='gigList'>
        {GigList.map((gigItem, key) => {
        return (
            <GigItem 
                key={key}
                event={gigItem.event}
                promoter={gigItem.promoter}
                location={gigItem.location}
                image={gigItem.image}
                /> 
            )
        })}
    </div> 
    </div>
  )
}

export default Gigs
