import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./admin.css";
import DP from "./aba.jpg";

import { FaClipboardList } from "react-icons/fa";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("post");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      <Sidebar setActiveSection={setActiveSection} />

      <main className="main-content">
        {activeSection === "post" && <Post />}
      </main>
    </div>
  );
}




function Sidebar({ setActiveSection }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handlehome() {
    navigate("/");
  }

  return (
    <>
 <div className="hamburger" onClick={() => setOpen(!open)}>
  <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
</div>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="admin-dp">
          <div className="dp-img">
            <img alt="dp" src="dp.jpg" />
          </div>

          <div className="dp-text-admin">
            <h3>Arjun Kuswah</h3>
            <p>User</p>
          </div>
          <div className="edit-icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>

        <nav>
          <button onClick={handlehome}>
            <i className="fa-solid fa-house"></i> Home
          </button>

          <button onClick={() => {setActiveSection("post");setOpen(!open)}}>
          <FaClipboardList /> Your Post
          </button>

          <button onClick={handlehome}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}




function Post() {

const cardData = [
  {
    name: "Rahul Sharma",
    date: "2026-01-12",
    category: "Electronics",
    location: "Bus Stand",
    status: "Lost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Amit Verma",
    date: "2026-01-15",
    category: "Personal Items",
    location: "Market",
    status: "Found",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Neha Singh",
    date: "2026-01-18",
    category: "Bags",
    location: "College",
    status: "Lost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Pooja Patel",
    date: "2026-01-20",
    category: "Jewelry",
    location: "Mall",
    status: "Found",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Rohit Kumar",
    date: "2026-01-22",
    category: "Documents",
    location: "RTO Office",
    status: "Lost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Sneha Joshi",
    date: "2026-01-25",
    category: "Keys",
    location: "Parking Area",
    status: "Found",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Arjun Mehta",
    date: "2026-01-27",
    category: "Watches",
    location: "Gym",
    status: "Lost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    name: "Kavita Rao",
    date: "2026-01-30",
    category: "Bags",
    location: "Railway Station",
    status: "Found",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  }
];
  return (
    <div className="dashboard-lost">
      
      {/* TOP CARD */}
      <div className="summary-card" id="summary-card-post">
        <h2><FaClipboardList /> Your Total Posts</h2>
        <p> 8 items</p>
      </div>


     <div className='lost-upper-div'>
         <div className='lost-search-bar' id="search-bar-post">
           <i class="fa-solid fa-bars"></i> 
           <input type='text' placeholder='Enter Item Name'/>
           <i class="fa-solid fa-magnifying-glass" id='search-icon'></i>
         </div>
     </div>

   
 
         <div className='lost-card-div' id="report-card-div">
            {cardData.map((user, i) => (
         <div className="lost-card" key={i} id="lost-card-post">
        <div className="edit-icon-post-user"> <i className="fa-solid fa-pen-to-square"></i></div>      <div className="edit-icon-post"><i class="fa-solid fa-trash-can"></i></div>
       <div className="lost-card-header">
         <div className="lost-avatar">A</div>
         <div>
           <h4>{user.name}</h4>
           <p>{user.date}</p>
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
         <button className={user.status === "Lost" ? "lost-btn-user lost" : "lost-btn-user found"}>{user.status}</button>
         <h3>{user.category}</h3>
         <p className="lost-location">{user.location}</p>
 
         <p className="lost-desc">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor.
         </p>
 
       </div>
     </div> ))}
         </div>
          
    



    </div>
  );
}