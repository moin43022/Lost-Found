import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./Adminn.css";

const pieData = [
  { name: "Lost Items", value: 120 },
  { name: "Found Items", value: 85 },
  { name: "Pending", value: 35 },
];

const COLORS = ["#3F4F3A", "#6b8f5f", "#9bbf9b"];

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Lost & Found – Admin Panel</h1>

      {/* SUMMARY */}
      <div className="summary">
        <div className="summary-box">
          <span>Total Lost</span>
          <strong>120</strong>
        </div>
        <div className="summary-box">
          <span>Total Found</span>
          <strong>85</strong>
        </div>
        <div className="summary-box">
          <span>Pending</span>
          <strong>35</strong>
        </div>
      </div>

      {/* CHART */}
      <div className="chart-section">
        <h2>Case Distribution</h2>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
              isAnimationActive={true}
              animationDuration={1200}
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}