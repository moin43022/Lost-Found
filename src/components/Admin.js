import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./admin.css";
import DP from "./aba.jpg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

import { FaClipboardList, FaSearch, FaBoxOpen, FaUsers } from "react-icons/fa";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      <Sidebar setActiveSection={setActiveSection} />

      <main className="main-content">

        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "lost" && <Lost />}
        {activeSection === "found" && <Found />}
        {activeSection === "user" && <User />}
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
            <h3>Prakash Singh</h3>
            <p>Admin</p>
          </div>
          <div className="edit-icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>

        <nav>
          <button onClick={handlehome}>
            <i className="fa-solid fa-house"></i> Home
          </button>

          <button onClick={() => {setActiveSection("dashboard");setOpen(!open)}}>
            <i className="fa-solid fa-file"></i> Dashboard
          </button>

          <button onClick={() => {setActiveSection("user");setOpen(!open)}}>
            <i className="fa-solid fa-users"></i> Users
          </button>

          <button onClick={() => {setActiveSection("lost");setOpen(!open)}}>
            <i className="fa-solid fa-magnifying-glass"></i> Lost Items
          </button>

          <button onClick={() => {setActiveSection("found");setOpen(!open)}}>
            <i className="fa-solid fa-box-open"></i> Found Items
          </button>

          <button onClick={() => {setActiveSection("post");setOpen(!open)}}>
            <i className="fa-solid fa-pen-to-square"></i> Edit Post
          </button>

          <button onClick={handlehome}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}



function Dashboard() {
  const cards = [
    { title: "Total Reports", value: "1382", icon: <FaClipboardList />, color: "purple" },
    { title: "Total Users", value: " 1042", icon: <FaUsers />, color: "blue" },
    { title: "Lost Items", value: "963", icon: <FaSearch />, color: "orange" },
    { title: "Found Items", value: "719", icon: <FaBoxOpen />, color: "green" },
  ];

  const userData = [
    { name: "Jan", users: 20 },
    { name: "Feb", users: 35 },
    { name: "Mar", users: 50 },
    { name: "Apr", users: 70 },
    { name: "May", users: 95 }, 
     { name: "Jun", users: 101 },
    { name: "Jul", users: 113 },
    { name: "Aug", users: 124 },
    { name: "Sep", users: 135 },
    { name: "Nov", users: 155 },
  ];

  const itemData = [
    { name: "Jan", lost: 40, found: 25 },
    { name: "Feb", lost: 55, found: 30 },
    { name: "Mar", lost: 65, found: 40 },
    { name: "Apr", lost: 80, found: 55 },
    { name: "May", lost: 95, found: 70 },
    { name: "Jun", lost: 70, found: 55 },
    { name: "jul", lost: 83, found: 60 },
    { name: "Aug", lost: 91, found: 70 },
    { name: "Sep", lost: 76, found: 65 },
    { name: "Nov", lost: 59, found: 40 },
  ];

  const pieData = [
    { name: "Lost", value: 780 },
    { name: "Found", value: 470 },
  ];
  const [userChartData, setUserChartData] = useState(userData);
const [itemChartData, setItemChartData] = useState(itemData);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 801) {
      // Mobile & Tablet → show only 6 months
      setUserChartData(userData.slice(0, 6));
      setItemChartData(itemData.slice(0, 6));
    } else {
      // Desktop → show all
      setUserChartData(userData);
      setItemChartData(itemData);
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="dashboard fade-in">
<header className="page-header">
  <div className="header-left">
    <div className="header-icon-box">
      <i className="fa-solid fa-chart-line"></i>
    </div>
    <div>
      <h1>Admin Dashboard</h1>
      <p>Users and Lost & Found activity</p>
    </div>
  </div>
</header>

      {/* Cards */}
      <section className="card-grid">
        {cards.map((c, i) => (
          <div key={i} className={`stat-card ${c.color} slide-up`}>
            <div className="stat-top">
              <span>{c.icon}</span>
              <span>{c.title}</span>
            </div>
            <h2>{c.value}</h2>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="chart-grid">
         <div className="chart-card fade-in">
          <h3><span id="lost-text">Lost</span> <span id="vs-text">vs</span> <span id="found-text">Found</span> <span id="found-text">Ratio</span> </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={130} label>
                <Cell fill="#f4a261" />
                <Cell fill=" #6b8f5f" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      <div className="chart-card fade-in">
  <h3>New Users Per Month</h3>

  <div className="chart-wrapper user-graph-mb">
    <ResponsiveContainer width="100%">
      <LineChart data={userChartData}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis width={30}/>
        <Tooltip />
        <Line type="monotone" dataKey="users" />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
       
      </section>
   <div className="chart-card fade-in">
  <h3>
    <span id="lost-text">Lost</span> <span id="vs-text">vs</span>{" "}
    <span id="found-text">Found</span>
  </h3>

  <div className="chart-wrapper bar-graph-mb">
    <ResponsiveContainer width="100%">
      <BarChart data={itemChartData}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis width={30}/>
        <Tooltip />
        <Bar dataKey="lost" fill="#f4a261" />
        <Bar dataKey="found" fill="#6b8f5f" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
 
      <section className="table-section fade-in">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>New Users</th>
              <th>Lost Items</th>
              <th>Found Items</th>
            </tr>
          </thead>
        <tbody>
  {itemData.map((row, i) => (
    <tr key={i}>
      <td data-label="Month">{row.name}</td>
      <td data-label="New Users">{userData[i].users}</td>
      <td data-label="Lost Items">{row.lost}</td>
      <td data-label="Found Items">{row.found}</td>
    </tr>
  ))}
</tbody>
        </table>
      </section>
    </div>
  );
}





function Lost() {

const isMobile = window.innerWidth < 490;

const data = [
  { name: isMobile ? "Elec" : "Electronics", value: 63 },   
  { name: isMobile ? "Per" : "Personal Items", value: 89 },
  { name: isMobile ? "Docs" : "Documents", value: 18 },
  { name: isMobile ? "Pep" : "People & Pets", value: 35 },
  { name: isMobile ? "Auto" : "Vehicles", value: 6 },
  { name: isMobile ? "Spt" : "Sports & Toys", value: 16 }  
];
const lostItems = [
  { item: "iPhone 13", category: "Electronics", location: "Bus Stand", date: "2026-01-12" },
  { item: "Black Wallet", category: "Personal Items", location: "Market", date: "2026-01-15" },
  { item: "Backpack", category: "Bags", location: "College", date: "2026-01-18" },
  { item: "Gold Ring", category: "Jewelry", location: "Mall", date: "2026-01-20" },
  { item: "Driving License", category: "Documents", location: "RTO Office", date: "2026-01-22" },
  { item: "Car Keys", category: "Keys", location: "Parking Area", date: "2026-01-25" },
  { item: "Laptop Bag", category: "Bags", location: "Railway Station", date: "2026-01-27" },
  { item: "Wrist Watch", category: "Watches", location: "Gym", date: "2026-01-30" },
];
  return (
    <div className="dashboard-lost">
      
      {/* TOP CARD */}
      <div className="summary-card" >
        <h2><i class="fa-solid fa-magnifying-glass"></i> Total Lost Items</h2>
        <p>258 Items Reported</p>
      </div>


  <div className="graph-section">
        <div className="chart-card-lost">
          <h3 id="lost-h3"><i class="fa-solid fa-magnifying-glass"></i> Items by Category (Bar)</h3>
  <div className="chart-wrapper-lost">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
<XAxis
  dataKey="name"
  tick={{ fontSize: window.innerWidth < 600 ? 10 : 17.5 }}
  textAnchor="end"
/>
      <YAxis width={30} />
      <Tooltip />
      <Bar
        dataKey="value"
        fill="#f4a261"
        animationDuration={2500}
        animationEasing="ease-in-out"
        style={{ cursor: "pointer" }}
      />
    </BarChart>
  </ResponsiveContainer>
</div>
  
        </div>

      </div>

 <section className="table-section fade-in">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
        <tbody>
  {lostItems.map((row, i) => (
    <tr key={i}>
      <td data-label="Item Name">{row.item}</td>
      <td data-label="Category">{row.category}</td>
      <td data-label="Location">{row.location}</td>
      <td data-label="Date">{row.date}</td>
    </tr>
  ))}
</tbody>
        </table>
      </section>


    </div>
  );
}

function Found() {

const isMobile = window.innerWidth < 490;

const data = [
  { name: isMobile ? "Elec" : "Electronics", value: 63 },   
  { name: isMobile ? "Per" : "Personal Items", value: 89 },
  { name: isMobile ? "Docs" : "Documents", value: 18 },
  { name: isMobile ? "Pep" : "People & Pets", value: 35 },
  { name: isMobile ? "Auto" : "Vehicles", value: 6 },
  { name: isMobile ? "Spt" : "Sports & Toys", value: 16 }  
];
const lostItems = [
  { item: "iPhone 13", category: "Electronics", location: "Bus Stand", date: "2026-01-12" },
  { item: "Black Wallet", category: "Personal Items", location: "Market", date: "2026-01-15" },
  { item: "Backpack", category: "Bags", location: "College", date: "2026-01-18" },
  { item: "Gold Ring", category: "Jewelry", location: "Mall", date: "2026-01-20" },
  { item: "Driving License", category: "Documents", location: "RTO Office", date: "2026-01-22" },
  { item: "Car Keys", category: "Keys", location: "Parking Area", date: "2026-01-25" },
  { item: "Laptop Bag", category: "Bags", location: "Railway Station", date: "2026-01-27" },
  { item: "Wrist Watch", category: "Watches", location: "Gym", date: "2026-01-30" },
];
  return (
    <div className="dashboard-lost" id="dashboard-found">
      
      {/* TOP CARD */}
      <div className="summary-card" id="summary-card-lost">
        <h2><i class="fa-solid fa-box-open"></i> Total Found Items</h2>
        <p>258 Items Reported</p>
      </div>

      {/* GRAPH SECTION */}
      <div className="graph-section">
        <div className="chart-card-lost">
          <h3 id="found-h3"><i class="fa-solid fa-box-open"></i> Items by Category (Bar)</h3>
  
     <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
<XAxis
  dataKey="name"
  tick={{ fontSize: window.innerWidth < 600 ? 10 : 17.5 }}
  textAnchor="end"
/>
      <YAxis width={30} />
      <Tooltip />
      <Bar
        dataKey="value"
        fill=" #6b8f5f"
        animationDuration={2500}
        animationEasing="ease-in-out"
        style={{ cursor: "pointer" }}
      />
    </BarChart>
  </ResponsiveContainer>
  
        </div>

      </div>
 <section className="table-section fade-in ">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
        <tbody>
  {lostItems.map((row, i) => (
    <tr key={i}>
      <td data-label="Item Name">{row.item}</td>
      <td data-label="Category">{row.category}</td>
      <td data-label="Location">{row.location}</td>
      <td data-label="Date">{row.date}</td>
    </tr>
  ))}
</tbody>
        </table>
      </section>


    </div>
  );
}

function User() {


  const userData = [
    { name: "Jan", users: 20 },
    { name: "Feb", users: 35 },
    { name: "Mar", users: 50 },
    { name: "Apr", users: 70 },
    { name: "May", users: 95 }, 
     { name: "Jun", users: 101 },
    { name: "Jul", users: 113 },
    { name: "Aug", users: 124 },
    { name: "Sep", users: 135 },
    { name: "Nov", users: 155 },
  ];

  const [userChartData, setUserChartData] = useState(userData);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 801) {
      // Mobile & Tablet → show only 6 months
      setUserChartData(userData.slice(0, 6));
    } else {
      
      setUserChartData(userData);
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const usersData = [
  { name: "Rahul Sharma", number: "9876543210", date: "2026-01-12" },
  { name: "Amit Verma", number: "9123456789", date: "2026-01-15" },
  { name: "Neha Singh", number: "9988776655", date: "2026-01-18" },
  { name: "Pooja Patel", number: "9090909090", date: "2026-01-20" },
  { name: "Rohit Kumar", number: "9345612789", date: "2026-01-22" },
  { name: "Sneha Joshi", number: "9567841230", date: "2026-01-25" },
  { name: "Arjun Mehta", number: "9871234567", date: "2026-01-27" },
  { name: "Kavita Rao", number: "9012345678", date: "2026-01-30" },
];
  return (
    <div className="dashboard-lost" id="dashboard-user">
      
      {/* TOP CARD */}
      <div className="summary-card" id="summary-card-user">
        <h2><i class="fa-solid fa-users"></i> Total Registered Users</h2>
        <p>258 Users</p>
      </div>

      {/* GRAPH SECTION */}
      <div className="graph-section">
  <div className="users-chart-container" id="user-grap-div">
  <h3 className="users-chart-title" id="user-h3">
    <i className="fa-solid fa-users"></i> New Users Per Month
  </h3>

  <div className="users-chart-card fade-in" id="user-graph">
    <div className="users-chart-wrapper">
      <ResponsiveContainer width="100%">
        <LineChart data={userChartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis width={30} />
          <Tooltip />
          <Line type="monotone" dataKey="users" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

      </div>
 <section className="table-section fade-in">
        <table>
          <thead>
            <tr>
              <th>Users Name</th>
              <th>Contact Number</th>
              <th>Registered Date</th>
              <th>Action</th>
            </tr>
          </thead>
        <tbody>
  {usersData.map((row, i) => (
    <tr key={i}>
      <td data-label="User Name">{row.name}</td>
      <td data-label="Contact Number">{row.number}</td>
      <td data-label="Registered Date<">{row.date}</td>
      <td data-label="Action"><button>Block</button> </td>
    </tr>
  ))}
</tbody>
        </table>
      </section>


    </div>
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
        <h2><FaClipboardList /> Total Item Reports</h2>
        <p>258 Submitted</p>
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
        <div className="edit-icon-post"><i class="fa-solid fa-trash-can"></i></div>
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