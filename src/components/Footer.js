import React from 'react'
import {Link} from 'react-router-dom'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faInstagram,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='footer-main-div'>
      <div className='footer-img-div'>
       <img alt='logo' src='main-logo.svg'/>
      </div>
        <div className='footer-site-div'>
          <ul>
            <h1>Site</h1>
             <li>Emergency Section</li>
           <Link to="/lostform"><li>Report Lost</li></Link> 
           <Link to="/foundform"> <li>Report Found</li></Link>
          </ul>
      </div>
        <div className='footer-help-div'>
             <ul>
            <h1>Help</h1>
            <Link to="/contact"> <li>Contact Us</li></Link>
            <li>Term & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
      </div>
       
        <div className='footer-links-div' >
             <ul className='f-site'>
            <h1>Links</h1>
           <Link to="/about"> <li>About Us</li></Link>
            <li>Linkedin</li>
            <li>Youtube</li>
          </ul>
      </div>
       <div className='footer-contact-div'>
             <ul>
            <h1>Contact Us</h1>
            <li>Tel : +94 716520690</li>
            <li>Phone : +91 1234567890</li>
            <li>Email : lost&found@gmail.com</li>
          </ul>
        
      </div>
       <div className='footer-copyright-div'>
              <div className='footer-icons'>
            <div className='footer-icon'>  <FontAwesomeIcon icon={faXTwitter} /></div>
          <div className='footer-icon'>   <FontAwesomeIcon icon={faInstagram} /> </div>
          <div className='footer-icon'>   <FontAwesomeIcon icon={faFacebook} /></div>
          <div className='footer-icon'>   <FontAwesomeIcon icon={faLinkedin} /></div>
         
         
         
         

          </div>
             <p>© Copyright 2026 Lost and Found All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
