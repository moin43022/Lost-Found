import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 801);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 801;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-m-div">
      <div className="navbar-m-div-left">
        <div className="navbar-m-div-left-img">
          <img src="main-logo.svg" alt="logo" />
        </div>

        <div className="navbar-m-div-left-text">
          <h1>I Found</h1>
          <p>Discover. Connect. Reclaim.</p>
        </div>
      </div>

      <div className="navbar-m-div-right">
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
            initial={false}
               animate={
                 isMobile
                      ? {
                        x: menuOpen ? 0 : "100%",
                          opacity: menuOpen ? 1 : 0,
                     }
                            : {
                                          x: 0,
                               opacity: 1,
                                         }
                                               }
                                               transition={
                                                            isMobile
                                                           ? {
                                                        type: "spring",
                                             stiffness: 70,
                                            damping: 22,
                                               }
                                                    : {
                                                    duration: 0,
                                                   }
                                               }
>

          <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}><li>About Us</li></Link>
          <Link to="/" className="contact-nav" onClick={() => setMenuOpen(false)}><li>Contact Us</li></Link>
          <Link to="/lost" onClick={() => setMenuOpen(false)}><li>Lost Items</li></Link>
          <Link to="/found" onClick={() => setMenuOpen(false)}><li>Found Items</li></Link>
          <Link to="/" onClick={() => setMenuOpen(false)}><button>Sign in</button></Link>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
