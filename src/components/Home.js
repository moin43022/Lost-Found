import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {


  return (
    <div className='mid-main'>
       
      <div className='mid-main-div-left'>
          <h1 className='find'>Find &</h1>
          <h1 className='find'>Recover</h1>
          <h1 className='fire'>Find & Recover</h1>
          <span className='with'>With</span> <span className='ease'> Ease</span>
          <p>Experience effortless recovery with our dedicated lost and found service.</p>
          <div className='mid-main-div-p'>
            <p>We're excited to help you find and recover lost items. Easily report lost belongings, search for found items, and connect with others. Our user-friendly platform aims to reunite you with your lost possessions quickly and efficiently.We're excited to help you find and recover lost items. Easily report lost belongings, search for found items, and connect with others.</p>
          <p>Thank you for choosing our service. If you need assistance, feel free to contact us.</p>
          <p>Happy searching and best of luck!</p>
          </div>
          
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


