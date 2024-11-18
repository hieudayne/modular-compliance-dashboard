import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./ComplianceStatus.css";

const complianceData = [
  { name: "Completed", value: 70, color: "#00C49F" },
  { name: "Overdue", value: 20, color: "#FF8042" },
  { name: "Pending", value: 10, color: "#FFBB28" },
];

const ComplianceStatus = () => {
  return (
    <div className="compliance-status-container">
      <h2 className="section-title">Compliance Status</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={complianceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={({ x, y, payload }) => {
              const { color } = payload;
              return (
                <text
                  x={x}
                  y={y + 10}
                  fill={color}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {complianceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComplianceStatus;
