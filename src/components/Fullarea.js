import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fullarea.css";

const Fullarea = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
    "Khedi Buzurg Ward 42",
  ];

  const filteredWard = ward.filter((w) =>
    w.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="area-page">
      <div className="area-container">
        <h1 className="area-title">
          <i className="fa-solid fa-location-dot"></i> Choose Your Ward
        </h1>
        <p className="area-subtitle">
          Select the ward where the item was lost or found
        </p>

      
      <div className='lost-search-bar' id="ward-search">
          <i class="fa-solid fa-bars"></i> 
          <input type='text'  placeholder="Search ward..."
          value={search}      onChange={(e) => setSearch(e.target.value)}/>
          <i class="fa-solid fa-magnifying-glass" id='search-icon'></i>
        </div>

        <div className="ward-grid">
          {filteredWard.map((item, index) => (
            <div
              className="ward-card"
              key={index}
            //   onClick={() => navigate(`/ward/${index + 1}`)}
            >
              {item}
            </div>
          ))}
        </div>

        {filteredWard.length === 0 && (
          <p className="no-result">No ward found</p>
        )}
      </div>
    </div>
  );
};

export default Fullarea;
