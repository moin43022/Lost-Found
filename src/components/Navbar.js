import React from 'react'
import { useState } from 'react';
import "./navbar.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='navbar-m-div'>
        <div className='navbar-m-div-left'>
            
             <div className='navbar-m-div-left-img'>
               <img src='main-logo.svg' />
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
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>Home</li>
            <li>About</li>
             <li>Report Lost</li>
            <li>Report Found</li>
             <button>Sign in</button>
        </ul>
        </div>     
    </div>
  )
}

export default Navbar
