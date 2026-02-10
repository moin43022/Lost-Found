import "./item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from 'react-router-dom';
import { useEffect ,useState} from 'react';




const images = [
"./cat.jpg",
"./child.png",
"./iphone.jpg"
];


 

const Headphone = ({onClose}) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  return (
    <div className='main-item-div'>
     
     <div className="item-left">
      <h1>Missing Item Alert  <i class="fa-solid fa-bullhorn"></i></h1>
           <div className="viewer-overlay">   
      <button className="nav-arrow left" onClick={prev}>‹</button>
      <img src={images[index]} alt="product" className="viewer-image" />
      <button className="nav-arrow right" onClick={next}>›</button>
    </div>
    

  <div className="item-page">

  <section className="post-info">
    <h2 className="post-title">Lost Item Details</h2>

    <div className="post-grid">
      <div className="post-item">
        <p className="post-label" id="status-lost">Status : </p>
        <p className="post-value lost">Lost</p>
      </div>

      <div className="post-item">
        <p className="post-label">Lost Item : </p>
        <p className="post-value">Person</p>
      </div>

      <div className="post-item">
        <p className="post-label">Date : </p>
        <p className="post-value">12 Feb 2025</p>
      </div>
         <div className="post-item">
        <p className="post-label">Time : </p>
        <p className="post-value">1:15 PM</p>
      </div>

      <div className="post-item">
        <p className="post-label" id="desc-loc">Location : </p>
        <p className="post-value">Bus Stand, Ward 12, Khargone, Madhya Pradesh 451001.</p>
      </div>
      
       <div className="post-item">
        <p className="post-label">Reward : </p>
        <p className="post-value">₹5000/-</p>
      </div>
        <div className="post-item">
        <p className="post-label">Contact Number : </p>
        <p className="post-value">+91 98765 43210</p>
      </div> <div className="post-item">
        <p className="post-label">Gmail : </p>
        <p className="post-value">abcd@gmal.com</p>
      </div>
      <div className="post-item full">
        <p className="post-label" id="desc-loc">Description : </p>
        <p className="post-value" id="desc-lost">
        A male person, approximately 32 years old, was last seen on 12 Feb 2026 at around 1:15 PM near the main bus stand, Ward 12.
           He was wearing a blue shirt and black trousers at the time.
                If anyone has seen him or has any information, please contact immediately.  Black headphones lost near the main bus stand.
          Please contact if found.
        </p>
      </div>
    </div>
  </section>



</div>
      </div>     
     


<div className="item-right">
<div className="item-right-1">
<div  className="item-right-1-top">
<div className="dp"><img alt="dp" src="dp.jpg"/> </div>
<div className="dp-text">
  <p>Posted by</p>
  <h3> Prakash Potdar</h3>
</div>

</div>
<div className="loc-dp">
  <p><i class="fa-solid fa-location-dot"></i> Location</p> <p>Khargone </p>
</div>
<div  className="loc-dp" id="joined">
  <p><i class="fa-solid fa-user-check"></i> Joined </p> <p>Feb 9th, 2026</p>
</div>
<button><i class="fa-solid fa-phone"></i>+919876543210</button>
</div>

<div  className="item-right-2">
<p>Location Map</p>
<iframe
  title="Location Map of Khargone, MP"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42430.8877695471!2d75.60094035025195!3d21.832400211698374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd885c4bd93b163%3A0xae95ec27b40bf31d!2sKhargone%2C%20Madhya%20Pradesh%20451001!5e0!3m2!1sen!2sin!4v1770030651875!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>

<div  className="item-right-3">
  <h2>Safety Tips for Finders</h2>
  <p><i class="fa-solid fa-check"></i> Keep your contact details hidden</p>
  <p><i class="fa-solid fa-check"></i> Double check the information
</p>
  <p><i class="fa-solid fa-check"></i> Contact us if required</p>
</div>
</div>












    </div>
  )
}

export default Headphone
