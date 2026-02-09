import React from 'react'
import "./lostform.css";
const Lostform = () => {
  return (
    <div className='lostform-div'>
        <h1>Report Lost Item</h1>
      <form>
        <div> 
        <label>Item : </label>
       <input type='text' placeholder='Item Name'/>
        </div>
       <div> 
        <label>Location : </label>
       <input type='text' placeholder='Location'/>
        </div>
          <div> 
        <label>Date : </label>
       <input type='date'/>
        </div>
                <div> 
        <label>Number : </label>
       <input type='number' placeholder='Contact Number'/>
        </div>
          <div> 
        <label>Description : </label>
       <textarea placeholder='Massage'></textarea>
        </div>
      <div>
  <label className="form-label">Upload Photo :</label>

  <input
    type="file"
    id="photoUpload"
    accept="image/*"
    hidden
  />

  <label htmlFor="photoUpload" className="img-upload">
    <i className="fa-solid fa-upload"></i>
  </label>
</div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Lostform
