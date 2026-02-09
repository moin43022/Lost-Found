import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact-div'>
      <div className='contact-header'>
    <div className='contact-heading'>
            <h1>Contact Us</h1>
       <p>
We’re here to help and support you at every step of your journey with us. If you have any questions, suggestions, or need assistance of any kind, please don’t hesitate to reach out.  
</p>
    </div>
      

      </div>
      <div className='contact-mid'>
        <h1 className='get'>Get in Touch</h1>
          <p className='getp'>Get in touch with us for help reporting, searching, or recovering lost items.</p>
<section className="contact-info">
      <div className="info-cards">
        <div className="info-card">
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>+91 716520690</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Location</h4>
          <p>Khargone, India</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>lost&found@gmail.com</p>
        </div>
      </div>
      </section>
<div className='mapandform'>
<iframe
  title="Location Map of Khargone, MP"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42430.8877695471!2d75.60094035025195!3d21.832400211698374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd885c4bd93b163%3A0xae95ec27b40bf31d!2sKhargone%2C%20Madhya%20Pradesh%20451001!5e0!3m2!1sen!2sin!4v1770030651875!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

<div className='form-div-c'>
 <h1> Send Us a Message</h1>
     
       <form>
      <div>
          <label>
          <input type='text' placeholder='Enter Name'/>
        </label>
         <label>
          <input type='text' placeholder='Enter Email'/>
        </label>
      </div>
       <div>
          <label>
          <input type='number' placeholder='Phone Number'/>
        </label>
         <label>
          <input type='text' placeholder='Subject'/>
        </label>
       </div>
         <label>
          <textarea placeholder='Massage'>
          </textarea>
        </label>
        <button>Submit</button>
       </form>
</div>
</div>

</div>
     
      
    </div>
  )
}

export default Contact
