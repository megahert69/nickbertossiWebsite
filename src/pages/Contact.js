import React from 'react';
import logoImage from '../assets/logoImage.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
            style={{backgroundImage: `url(${logoImage})`}}
        ></div>
        <div className='rightSide'>
            <h1>Contact & Bookings</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full name..' type='text' />
                <label htmlFor='email'>E-Mail</label>
                <input name='email' placeholder='Enter Email' type='email' />
                <lable htmlFor='message'>Message</lable>
                <textarea 
                    rows='6' 
                    placeholder='Enter message..' 
                    name='messsage' 
                    required
                ></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact
