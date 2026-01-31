import React from 'react'
import "./lostform.css";
const Lostform = () => {
  return (
    <div className='lostform-div'>
        <h1>Report Lost Item</h1>
      <form>
        <div> 
        <label>Item : </label>
       <input type='text'/>
        </div>
       <div> 
        <label>Location : </label>
       <input type='text'/>
        </div>
          <div> 
        <label>Date : </label>
       <input type='date'/>
        </div>
          <div> 
        <label>Description : </label>
       <textarea></textarea>
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
