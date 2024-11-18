import React from "react";
import TaskOverview from "./TaskOverview/TaskOverview";
import { TaskProvider } from "./Context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <TaskOverview buttonName="Sort by Deadline" />
    </TaskProvider>
  );
}
