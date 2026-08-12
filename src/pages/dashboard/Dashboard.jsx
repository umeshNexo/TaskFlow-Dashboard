import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import TaskItem from "../../components/TaskItem";

const Dashboard = () => {
  const {
    allTasks,
    loading,
    error,
    loadTasks,
    AddTask,
    UpdateTask,
    handleDeleteTask,
  } = useContext(Context);
  const navigate = useNavigate();

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = () => {
    const title = taskInput.trim();

    if (!title) return;

    AddTask(title);
    setTaskInput("");
  };

  const handleTaskComplete = (checked, id) => {
    UpdateTask(id, {
      completed: checked ? checked : false,
    });
  };

  return (
    <div className="dashboard">
      <section className="task-section">
        <article className="add-task-wrapper">
          <input
            type="text"
            placeholder="Enter todo here to add..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
            className="task-input"
          />

          <button
            type="button"
            onClick={handleAddTask}
            className="add-task-button"
          >
            Add Task
          </button>
        </article>

        <article className="task-container-wrapper">
          <div className="task-container">
            <h2 className="task-container-title">All Tasks</h2>

            {loading && (
              <p className="task-message loading-message">Loading tasks...</p>
            )}

            {error && <p className="task-message error-message">{error}</p>}

            {!loading && !error && allTasks.length === 0 && (
              <p className="task-message empty-message">No tasks found.</p>
            )}

            {!loading &&
              !error &&
              allTasks.map((item) => (
                <TaskItem
                  key={item.id}
                  task={item}
                  onComplete={handleTaskComplete}
                  onDelete={handleDeleteTask}
                  onClick={() => navigate(`/taskdetails/${item.id}`)}
                />
              ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
