import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import HeadphonesIcon from '@mui/icons-material/Headphones'

import '../styles/Footer.css'

const socialLinks = [
  {
    id: 1,
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/nickbertossi/",
  },
  {
    id: 2,
    icon: <TwitterIcon />,
    url: "https://twitter.com/nickbertossi",
  },
  {
    id: 3,
    icon: <FacebookIcon />,
    url: "https://facebook.com/nick.berto",
  },
  {
    id: 4,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/",
  },
  {
    id: 5,
    icon: <HeadphonesIcon />,
    url: "https://www.soundcloud.com/nick_bertossi",
  },
];

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Footer;


// return (
//   <div className='footer'>
//       <div className='socialMedia'>
//           <InstagramIcon href='http://instagram.com/nickbertossi'/>
//           <TwitterIcon href='http://twitter.com/nickbertossi'/>
//           <FacebookIcon href='http://facebook.com/nick.berto'/>
//           <LinkedInIcon href='linkedin.com/nickberto' />
//       </div>
//       <p> &copy; 2024 nickbertossi.com</p>
//   </div>
// );
