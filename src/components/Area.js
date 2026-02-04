import React from 'react'
import "./area.css"

const Area = () => {

      const ward = [
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
    <div className='main-area-div'>
      <div className='area-div-left'>
        <h1> <i class="fa-solid fa-location-dot"></i> Choose a ward</h1>
    <div className="div-left-list">
  <ul className='first-ul'>
    {ward.slice(0, 7).map((ward, index) => (
      <li key={index}>{ward}</li>
    ))}
  </ul>

  <ul className='last-ul'>
    {ward.slice(7, 14).map((ward, index) => (
      <li key={index} className='last-wards1'>{ward} </li>
    ))}
  </ul>
   <ul className='last-ul'>
    {ward.slice(14, 21).map((ward, index) => (
      <li key={index} className='last-wards'>{ward}</li>
    ))}
  </ul>

</div>
 
 <button className='more-btn'> More Wards  <i class="fa-solid fa-arrow-right"></i></button>
    </div>
     <div className='area-div-right'>
     <div className='div-right-img'>
        <img alt='kgn' src='kgnn.png' />
     </div>
        <h2><i class="fa-solid fa-earth-americas"></i> Khargone City </h2>
    </div>
    </div>
  )
}

export default Area
