import React, { Suspense, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import "./App.css";

Amplify.configure(awsExports);

const TaskOverview = React.lazy(() =>
  import("MicroFrontendTaskOverview/TaskOverview")
);
const ComplianceStatus = React.lazy(() =>
  import("MicroFrontendComplianceStatus/ComplianceStatus")
);
const RecentActivity = React.lazy(() =>
  import("MicroFrontendRecentActivity/RecentActivity")
);

export default function App() {
  const [activeComponent, setActiveComponent] = useState("TaskOverview");

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app-container">
      <Authenticator hideDefault={true}>
        {({ signOut, user }) => (
          <div className="authenticated-container">
            <h1>Welcome {user.username}</h1>

            <div className="main-container">
              {/* Sidebar */}
              <div className="sidebar">
                <button
                  className={`sidebar-item ${
                    activeComponent === "TaskOverview" ? "active" : ""
                  }`}
                  onClick={() => handleNavClick("TaskOverview")}
                >
                  Task Overview
                </button>
                <button
                  className={`sidebar-item ${
                    activeComponent === "ComplianceStatus" ? "active" : ""
                  }`}
                  onClick={() => handleNavClick("ComplianceStatus")}
                >
                  Compliance Status
                </button>
                <button
                  className={`sidebar-item ${
                    activeComponent === "RecentActivity" ? "active" : ""
                  }`}
                  onClick={() => handleNavClick("RecentActivity")}
                >
                  Recent Activity
                </button>
                <button className="sign-out-button" onClick={signOut}>
                  Sign Out
                </button>
              </div>

              {/* Main Content Area */}
              <div className="content-area">
                <Suspense fallback={<div>Loading components...</div>}>
                  {activeComponent === "TaskOverview" && <TaskOverview />}
                  {activeComponent === "ComplianceStatus" && (
                    <ComplianceStatus />
                  )}
                  {activeComponent === "RecentActivity" && <RecentActivity />}
                </Suspense>
              </div>
            </div>
          </div>
        )}
      </Authenticator>
    </div>
  );
}
