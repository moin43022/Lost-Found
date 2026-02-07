import React from 'react'
import "./about.css"
const About = () => {
  return (
 <div className='about-main'>
     <div className='about-div'>
      <div className='about-text'>
        <h1 className='about-heading' >About Us</h1>
                <p>A secure, technology-driven platform that helps people report, search, and recover lost belongings with ease.</p>
      </div>
    </div>

    <div className='about-mid'>
       <div className='about-mid-left'>
        <img src='howwe.jpg' alt='about-us' />
       </div>
       <div className='about-mid-right'>
        <h1> Who We Are</h1>
        <p>
         We are a community-driven Lost & Found platform built to make the process of recovering lost items simple, secure, and stress-free. Our goal is to reduce the frustration and anxiety people face when they lose something valuable. By combining smart technology with genuine human trust, we create meaningful connections between those who have lost items and those who have found them. Our platform encourages honesty, transparency, and shared responsibility within the community. We believe that technology should bring people closer, not complicate their lives.
        </p>
       </div>
    </div>

  <section className="about-mission">
        <h2>Our Mission</h2>

        <div className="about-mission-grid">

          <div className="about-card">
            <div className="about-card-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3>Simplify Recovery</h3>
            <p>
              We simplify reporting, searching, and tracking lost items to
              reduce stress and confusion during recovery.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Build Trust & Safety</h3>
            <p>
              We create a secure environment where users feel confident sharing
              information through transparency and verification.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3>Connect Communities</h3>
            <p>
         Using smart technology, we connect people to reunite lost belongings quickly and responsibly, with trust and transparency.
            </p>
          </div>

        </div>
      </section>

 </div>
  )
}

export default About



