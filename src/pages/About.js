import React from 'react'
import BioImage from '../assets/IMG_2954.JPG'
import '../styles/About.css'


function About() {
  return (
    <div className='about'>
      <div 
        className='aboutTop'
        style={{backgroundImage: `url(${BioImage})`}}
      ></div>
      <div className='aboutBottom'>
        <h1>BIO</h1>
        <p>"A resident of Vancouver Canada and a staple of the west end night life, 
          Nick Bertossi's work as a producer and DJ over the last 17 years 
          has brought him all over the Americas.  He currently holds a 12 year 
          club residency in Vancouver while also working frequently with multiple 
          promoters at various venues in the city.  He has played nearly every 
          major Canadian city's pride festival and has done events in Los Angeles, 
          San Diego, San Francisco, Chicago, Toronto, Seattle, Atlanta, Montreal, 
          Florianopolis, Guadalajara, Mexico City and Honolulu to name a few. 
          On top of DJing, Nick is an avid producer with many releases on Kult Records, 
          Jungle Funk Records, Swishcraft and various others."</p>
      </div>

      
    </div>
  )
}

export default About
