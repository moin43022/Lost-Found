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
    <div className='main-headphone-div'>
     
          

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
        <p className="post-label">Status</p>
        <p className="post-value lost">Lost</p>
      </div>

      <div className="post-item">
        <p className="post-label">Posted By</p>
        <p className="post-value">Monu Khan</p>
      </div>

      <div className="post-item">
        <p className="post-label">Date</p>
        <p className="post-value">12 Feb 2026</p>
      </div>

      <div className="post-item">
        <p className="post-label">Location</p>
        <p className="post-value">Bus Stand, Ward 12</p>
      </div>

      <div className="post-item full">
        <p className="post-label">Description</p>
        <p className="post-value">
          Black headphones lost near the main bus stand.
          Please contact if found.
        </p>
      </div>
    </div>
  </section>



</div>















    </div>
  )
}

export default Headphone
