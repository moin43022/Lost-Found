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
        {activeSection === "admins" && <Admins />}
      </main>
    </div>
  );
}

/* ===== Sidebar ===== */
function Sidebar({ setActiveSection }) {
  return (
    <aside className="sidebar">
<div className="admin-dp">
  <div className="dp-img">
    <img alt="dp" src="dp.jpg"/>
  </div>

  <div className="dp-text-admin">
    <h3>Prakash Singh</h3>
    <p>Admin</p>
  </div>
  <div className="edit-icon"><i class="fa-regular fa-pen-to-square"></i></div>
</div>
      <nav>
            <button onClick={() => setActiveSection("dashboard")}><i class="fa-solid fa-house"></i> Home</button>
        <button onClick={() => setActiveSection("dashboard")}><i className="fa-solid fa-file"></i> Dashboard</button>

        <button onClick={() => setActiveSection("admins")}><i class="fa-solid fa-users"></i> Users </button>

        <button><i class="fa-solid fa-magnifying-glass"></i> Lost Items</button>
        <button><i class="fa-solid fa-box-open"></i> Found items</button>
        <button><i class="fa-solid fa-pen-to-square"></i> Edit Post</button>
        <button><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
      </nav>
    </aside>
  );
}

/* ===== Dashboard ===== */
function Dashboard() {
  const cards = [
    { title: "Total Users", value: " 1042", icon: <FaUsers />, color: "purple" },
    { title: "Lost Items", value: "963", icon: <FaSearch />, color: "green" },
    { title: "Found Items", value: "719", icon: <FaBoxOpen />, color: "orange" },
    { title: "Total Reports", value: "1682", icon: <FaClipboardList />, color: "blue" },
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
          <h3>Lost vs Found Ratio</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={130} label>
                <Cell fill="#f4a261" />
                <Cell fill="#6b8f5f" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card fade-in">
          <h3>New Users Per Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#6b8f5f" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
       
      </section>
     <div className="chart-card fade-in">
          <h3>Lost vs Found</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={itemData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="lost" fill="#f4a261" />
              <Bar dataKey="found" fill="#6b8f5f" />
            </BarChart>
          </ResponsiveContainer>
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
                <td>{row.name}</td>
                <td>{userData[i].users}</td>
                <td>{row.lost}</td>
                <td>{row.found}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

/* ===== Admins ===== */
function Admins() {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("coAdmins")) || [];
    setAdmins(stored);
  }, []);

  const openAdmin = (admin) => {
    localStorage.setItem("Password", admin.password || "");
    navigate("/admin");
  };

  return (
    <div className="admins-page">
      <h1>Co-Admins</h1>

      <div className="admin-grid">
        {admins.length > 0 ? (
          admins.map((a, i) => (
            <div key={i} className="admin-card" onClick={() => openAdmin(a)}>
              <img src={DP} alt="admin" />
              <p><b>User:</b> {a.name}</p>
              <p><b>Pass:</b> {a.password}</p>
              <p><b>Contact:</b> {a.contact || "N/A"}</p>
            </div>
          ))
        ) : (
          <p>No admins found</p>
        )}
      </div>
    </div>
  );
}