import React from 'react'
import { useState } from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const isMobilee = window.innerWidth < 770;
  return (
    <div className='navbar-m-div'>
        <div className='navbar-m-div-left'>
            
             <div className='navbar-m-div-left-img'>
               <img src='main-logo.svg' alt='logo'/>
             </div>

             <div className='navbar-m-div-left-text'>
                <h1>I Found</h1>
                <p>Discover. Connect. Reclaim. </p>
             </div>

        </div>

       <div className='navbar-m-div-right'>
         <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <motion.ul
  className="nav-links"
  initial={isMobilee ? { x: "100%", opacity: 0 } : {}}
  animate={
    isMobilee
      ? { x: menuOpen ? 0 : "100%", opacity: menuOpen ? 1 : 0 }
      : {}
  }
  transition={{
    type: "spring",
    stiffness: 70,
    damping: 22,
  }}
>
  <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
  <Link to="/about" onClick={() => setMenuOpen(false)}> <li>About Us</li></Link>
  <Link to="/" className='contact-nav' onClick={() => setMenuOpen(false)}><li >Contact Us</li></Link>
  <Link to="/lost" onClick={() => setMenuOpen(false)}><li>Lost Items</li></Link>
  <Link to="/found" onClick={() => setMenuOpen(false)}> <li>Found Items</li></Link>
  <Link to="/" onClick={() => setMenuOpen(false)}> <button>Sign in</button></Link>
 
  
 
 
 
</motion.ul>

        </div>     
    </div>
  )
}

export default Navbar
