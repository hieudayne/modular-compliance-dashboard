import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      dueDate: "2024-12-01",
      assignedTo: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      title: "Task 2",
      dueDate: "2024-11-30",
      assignedTo: "Jane Smith",
      status: "Completed",
    },
    {
      id: 3,
      title: "Task 3",
      dueDate: "2024-12-05",
      assignedTo: "Mike Brown",
      status: "Overdue",
    },
  ]);

  const markComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, markComplete, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
