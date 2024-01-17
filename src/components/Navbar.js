import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavBar =() => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>    
            <img className='logo' alt='logo' src={Logo} />
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/media">Media</Link>
                <Link to="/contact">Contacts</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/media">Media</Link>
            <Link to="/contact">Contacts</Link>
            <button onClick={toggleNavBar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  );
};


export default Navbar
