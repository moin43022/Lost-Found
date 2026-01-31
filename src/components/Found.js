import React from 'react'
import "./lost.css"
const Lost = () => {
  return (
    <div className='main-lost-div'>
    <div className='lost-upper-div'>
          <h1 className='lost-h1'>Search For Found Items </h1>
           <h1 className='lost-heading'>Found Items </h1>
        <div className='lost-search-bar'>
          <i class="fa-solid fa-bars"></i> 
          <input type='text' placeholder='Enter Item Name'/>
          <i class="fa-solid fa-magnifying-glass" id='search-icon'></i>
        </div>
         {/* <div className='mid-right-btn' id='mid-right-btn'>
             <p> Report</p>
             <img alt='lost' src='lost-img.png'  id='lost-img'/>
             </div> */}
    </div>

        <div className='lost-card-div'>

          <div className="lost-card">

      <div className="lost-card-header">
        <div className="lost-avatar">A</div>
        <div>
          <h4>User Name</h4>
          <p>Date</p>
        </div>
      </div>

     
      <div className="lost-card-image">
        <div className="lost-triangle"></div>
        <div className="lost-shapes">
          <div className="lost-square"></div>
          <div className="lost-circle"></div>
        </div>
      </div>


      <div className="lost-card-content">
        <button className="lost-btn">Massage</button>
        <h3>Title</h3>
        <p className="lost-location">Location</p>

        <p className="lost-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

      </div>
    </div>
        <div className="lost-card">

      <div className="lost-card-header">
        <div className="lost-avatar">A</div>
        <div>
          <h4>User Name</h4>
          <p>Date</p>
        </div>
      </div>

     
      <div className="lost-card-image">
        <div className="lost-triangle"></div>
        <div className="lost-shapes">
          <div className="lost-square"></div>
          <div className="lost-circle"></div>
        </div>
      </div>


      <div className="lost-card-content">
        <button className="lost-btn">Massage</button>
        <h3>Title</h3>
        <p className="lost-location">Location</p>

        <p className="lost-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

      </div>
    </div>
        <div className="lost-card">

      <div className="lost-card-header">
        <div className="lost-avatar">A</div>
        <div>
          <h4>User Name</h4>
          <p>Date</p>
        </div>
      </div>

     
      <div className="lost-card-image">
        <div className="lost-triangle"></div>
        <div className="lost-shapes">
          <div className="lost-square"></div>
          <div className="lost-circle"></div>
        </div>
      </div>


      <div className="lost-card-content">
        <button className="lost-btn">Massage</button>
        <h3>Title</h3>
        <p className="lost-location">Location</p>

        <p className="lost-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

      </div>
    </div>
        <div className="lost-card">

      <div className="lost-card-header">
        <div className="lost-avatar">A</div>
        <div>
          <h4>User Name</h4>
          <p>Date</p>
        </div>
      </div>

     
      <div className="lost-card-image">
        <div className="lost-triangle"></div>
        <div className="lost-shapes">
          <div className="lost-square"></div>
          <div className="lost-circle"></div>
        </div>
      </div>


      <div className="lost-card-content">
        <button className="lost-btn">Massage</button>
        <h3>Title</h3>
        <p className="lost-location">Location</p>

        <p className="lost-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

      </div>
    </div>
     
        </div>
      
    </div>
  )
}

export default Lost
