import React from "react";
import "./RecentActivity.css";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      timestamp: "2024-11-17 14:30",
      action: "Task 1 completed",
      user: "John Doe",
    },
    {
      id: 2,
      timestamp: "2024-11-17 15:00",
      action: "Task 2 updated",
      user: "Jane Smith",
    },
    {
      id: 3,
      timestamp: "2024-11-18 09:30",
      action: "Task 3 overdue",
      user: "Mike Brown",
    },
  ];

  return (
    <div className="recent-activity-container">
      <h2 className="section-title">Recent Activity</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <p>
              <strong>{activity.user}</strong> - {activity.action}
            </p>
            <span className="timestamp">{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
