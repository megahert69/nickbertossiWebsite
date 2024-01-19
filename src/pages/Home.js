import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BannerImage from '../assets/bgImage.jpeg'
import '../styles/Home.css'



function Home() {

  const navigate = useNavigate();

  return (
    
    <div className='home' style={{backgroundImage:`url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1>NICK BERTOSSI</h1>
        <br></br>
        <p>House Music All Night Long</p>
        <button onClick={() =>navigate("/contact")}>
            BOOKINGS
        </button>
        
        
      </div>
    </div>
  )
}

export default Home
