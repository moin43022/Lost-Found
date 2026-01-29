import React from 'react'
import "./how.css"
const How = () => {
  return (
   
    <div className='mid-div'>
      <h2 className='mid-div-heading'>How to post the Lost or Found item ?</h2>
      <h2 className='mid-div-heading-hide'>How to post ?</h2>
        <div className='mid-div-bottom'>
         <div className='vision'>
          <div className='vision-icon'>
            <i class="fa fa-user-plus hiw-icon"></i>
          </div>
             <div className='vision-text'>
               <h2>Step 1: Register with us</h2>
               <p>Don't know how to deal with lost or found items near you? Register with your name and email address. If you have registered already, you can use the same account for posting unlimited ads</p>

          </div>
         </div>
           <div className='vision'>
          <div className='vision-icon'>
        <i class="fa fa-check hiw-icon"></i>
          </div>
             <div className='vision-text'>
               <h2>Step 2: Verify your account</h2>
               <p>Confirm your registration through the verification link which has sent to the given email address and then you can manage the account details now. Use either username or email address for login to your account.</p>

          </div>
         </div>
          <div className='vision'>
          <div className='vision-icon'>
         <i class="fa fa-paper-plane hiw-icon"></i>
          </div>
             <div className='vision-text'>
               <h2>Step 3: Start reporting</h2>
               <p>You can start creating the ad for the lost or found items now to claim the item or hand over it to the rightful owner. Once done, we will post the ad on the large community where everybody can potentially take action in searching for what you have lost.</p>

          </div>
         </div>
        </div>
     </div>
   

  )
}

export default How
