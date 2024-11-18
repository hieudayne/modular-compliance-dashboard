import React, { useEffect, useState } from "react";
import { useTasks } from "../Context/TaskContext";
import "./TaskOverview.css";

export default function TaskOverview({ buttonName }) {
  const { tasks, markComplete, editTask } = useTasks();
  const [sortedTasks, setSortedTasks] = useState(tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [taskEdit, setTaskEdit] = useState({});

  const handleSort = (field) => {
    const sorted = [...sortedTasks].sort((a, b) =>
      a[field] > b[field] ? 1 : -1
    );
    setSortedTasks(sorted);
  };

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setTaskEdit({ ...task });
  };

  const handleSave = () => {
    editTask(taskEdit.id, taskEdit);
    setEditingTask(null);
    setTaskEdit({});
  };

  useEffect(() => {
    setSortedTasks(tasks);
  }, [tasks]);

  const handleCancel = () => {
    setEditingTask(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="task-overview-container">
      <h2 className="section-title">Task Overview</h2>
      <div className="sort-buttons">
        <button onClick={() => handleSort("dueDate")}>
          {buttonName || "Sort by Due Date"}
        </button>
        <button onClick={() => handleSort("status")}>Sort by Status</button>
      </div>
      <ul className="task-list">
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status.toLowerCase()}`}
          >
            <h3>{task.title}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Assigned To: {task.assignedTo}</p>
            <p>
              Status:{" "}
              <span className={`status ${task.status.toLowerCase()}`}>
                {task.status}
              </span>
            </p>
            <button onClick={() => markComplete(task.id)}>
              Mark as Complete
            </button>
            <button onClick={() => handleEdit(task)}>Edit</button>
            {editingTask === task.id && (
              <div className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={taskEdit.title}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="assignedTo"
                  value={taskEdit.assignedTo}
                  onChange={handleInputChange}
                />
                <input
                  type="date"
                  name="dueDate"
                  className="date-input"
                  value={taskEdit.dueDate}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
