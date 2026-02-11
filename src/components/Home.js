import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {


  return (
    <div className='mid-main'>
       
      <div className='mid-main-div-left'>
          <h1 className='find'>Found Something?</h1>
          <h1 className='find'>Lost Something?</h1>
          <h1 className='find'> We’ve Got You.</h1>
        
         <p className='mid-main-div-p' id='p-main'>• Secure and trusted platform.</p>
         <p className='mid-main-div-p'>• Simple, user-friendly experience.</p>
         <p className='mid-main-div-p'>• Report lost or found items easily.</p>
         <p className='mid-main-div-p'  id='p-main-last'>• Helping lost items find their way home.</p>
         <p className='mid-main-div-p' id='p-main-last' >• Faster recovery through community support.</p>
        
       
          
      </div>
       <div className='mid-main-div-right'>
         <div className='mid-right-top'>
          <Link to="/lostform">
             <div className='mid-right-btn'>
             <p>Lost</p>
             <img alt='lost' src='lost-img.png'  id='lost-img'/>
             </div>
             </Link>
             <Link to="/foundform">
               <div className='mid-right-btn' id='mid-right-green'>
                  <p>Found</p>
             <img alt='found' src='found-img.png' />
             </div>
             </Link>
      </div>
       <div className='mid-right-bottom'>
        <img alt='group' src='group.png' />
       </div>
 
  
      </div>
     
     
    </div>
  )
}

export default Home


