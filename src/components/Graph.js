import React from "react";
import "./graph.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./graph.css";

const data = [
  { name: "Phones", value: 12 },
  { name: "Bags", value: 8 },
  { name: "Pets", value: 5 },
  { name: "Documents", value: 15 },
  { name: "Keys", value: 6 },
    { name: "Phones", value: 12 },
  { name: "Bags", value: 8 },
  { name: "Pets", value: 5 },
  { name: "Documents", value: 15 },
  { name: "Keys", value: 6 }
];

const Graph = () => {
  return (
    <div className="graph-container">
      <h2 className="graph-title">
        Lost Items by Category
      </h2>

     <ResponsiveContainer>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar
      dataKey="value"
      fill="#4CAF50"
      animationDuration={2500}
      animationEasing="ease-in-out"
    style={{cursor:"pointer"}}
    />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
};

export default Graph;
