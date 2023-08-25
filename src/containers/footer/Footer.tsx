import React from 'react';
import './footer.css';
import { FaGoogle, FaLinkedin } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <div className='portfolio__footer section__padding'>
      <div className='portfolio__footer-links_div' id='contact'>
        <h1 className='gradient__text'>Get in Touch</h1>
        <div className='contact_links'>
          <a href='mailto: andyusnik@gmail.com'>
              <FaGoogle />
          </a>

          <a href='https://www.linkedin.com/in/andresfhm/'>
            <FaLinkedin />
          </a>  
          
        </div>
          
        
        
        </div>

      </div>
  )
}

export default Footer