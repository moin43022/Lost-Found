import React from 'react'
import "./lostform.css";
const Lostform = () => {
    const categories = [
      "-- Select Item --",
   "Phones & Tablets",
   "Bags", 
    "Jewelry",
   "Watches", 
    "People",
   "Documents",
    "Keys", 
     "Toys",
    "Laptop", 
   "Fashion Accessories", 
   "Clothes & Shoes",
    "Pets",
    "Sports Equipment",
    "Automobile", 
  ];
       const ward = [
        "-- Select Location --",
  "Meldereshwer Mandir Ward 1",
  "Nag Mandir Ward 2",
  "Saraswati Vidhya Mandir Ward 3",
  "Sarkit House Ward 4",
  "Hospital Ward 5",
  "Rhenmukteshwar Ward 6",
  "Bajrang Mandir Ward 7",
  "D.R.P. Line Ward 8",
  "Ravindra Nagar Ward 9",
  "Hanuman Mandir Ward 10",
  "Dr. Ambedkar Ward 11",
  "Sadhabana Ward 12",
  "Sidhi Vinayak Ward 13",
  "Balvant Ganj Ward 14",
  "Dr. Jakir Husain Ward 15",
  "Kala Deval Ward 16",
  "Kaharwadi Ward 17",
  "Shree Ram Mandir Ward 18",
  "Shree Krishna Ward 19",
  "Bheelat Mandir Ward 20",
  "Ayodhya Basti Ward 21",
  "Indira Nagar Ward 22",
  "Hanuman Mandir Ward 23",
  "Sanjay Nagar Ward 24",
  "Azad Nagar Ward 25",
  "Rajendra Nagar Ward 26",
  "Kanjipura Ward 27",
  "Sahkari Bank Ward 28",
  "Vishwasakha Colony Ward 29",
  "Aarampura Ward 30",
  "Santoshi Mata Mandir Ward 31",
  "Navgrah Mandir Ward 32",
  "Damkheda Mandir Ward 33",
  "Sukhpuri Ward 34",
  "Damkheda Ward 35",
  "Rahimpura Ward 36",
  "Aarampura Ward 37",
  "Sangvi Ward 38",
  "Dabariya Ward 39",
  "Kajalpura Ward 40",
  "Jaitpur Ward 41",
  "Khedi Buzurg Ward 42"
];
  return (
    <div className='lostform-div'>
      <form>
        <h1>Report Lost Item</h1>

       <div className='from-main-div'>
         <div className='form-div'> 
        <label>Item : </label>
    <select name="category" id="category" required>
       {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}

    </select>

        </div>

       <div className='form-div'> 
        <label>Location : </label>
       <select name="city" id="city" required>
       {ward.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}

    </select>
        </div>
       </div>

        <div className='from-main-div'>
  <div className='form-div'> 
        <label>Date : </label>
       <input type='date'/>
        </div>

         <div className='form-div'> 
        <label>Number : </label>
       <input type='number' placeholder='Contact Number'/>
        </div>
        </div>

          <div className='from-main-div'>
                <div className='form-div'> 
        <label>Email : </label>
       <input type='number' placeholder='Email Address'/>
        </div>
        <div className='form-div'>
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
          </div>

          <div className='from-main-div'>
                
      <div className='form-div'>
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
   <div className='form-div'>
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
        
          </div>
       

         <div className='form-div-terabox'> 
            
        <label>Description : </label>
       <textarea placeholder='Massage'></textarea>
        </div>


 

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Lostform
