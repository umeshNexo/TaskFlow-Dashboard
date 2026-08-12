import React from "react";

const TaskItem = ({ task, onComplete, onDelete, onClick }) => {
  const isCompleted = task.completed === true;

  return (
    <div
      className={`task-item ${isCompleted ? "task-completed" : ""}`}
      onClick={onClick}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onComplete(e.target.checked, task.id)}
        className="task-checkbox"
      />

      <p className="task-name">{task.title || task.name}</p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="delete-task-button"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
