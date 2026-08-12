import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import "../taskdetails/TaskDetails.css";
import { fetchTask } from "../../api";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    loading,
    setLoading,
    error,
    setError,
    task,
    setTask,
    handleDeleteTask,
    allTasks,
  } = useContext(Context);

  const loadTask = async () => {
    try {
      setLoading(true);
      setError("");

      try {
        const data = await fetchTask(id);

        if (data) {
          setTask(data);
          return;
        }
      } catch (apiError) {
        console.log("API failed, checking local tasks...", apiError);
      }

      const localTask = allTasks.find((item) => String(item.id) === String(id));

      if (localTask) {
        setTask(localTask);
        return;
      }

      setTask(null);
      setError("Task not found.");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTask();
  }, [id]);

  const isCompleted = task.completed === true;

  const handleDelete = () => {
    handleDeleteTask(task.id);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="task-details-page">
        <div className="task-details-card">
          <p className="task-message">Loading task...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="task-details-page">
        <div className="task-details-card">
          <p className="task-error">{error}</p>

          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="task-details-page">
        <div className="task-details-card">
          <h2>Task Not Found</h2>

          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-details-page">
      <div className="task-details-card">
        {/* Header */}
        <div className="task-details-header">
          <div>
            <p className="task-details-label">Task Details</p>
            <h1>{task.title || task.name}</h1>
          </div>

          <span
            className={`task-status ${isCompleted ? "completed" : "pending"}`}
          >
            {isCompleted ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Task Information */}
        <div className="task-info-grid">
          <div className="task-info-item">
            <span>Task ID</span>
            <strong>{task.id}</strong>
          </div>

          <div className="task-info-item">
            <span>User ID</span>
            <strong>{task.userId ?? "N/A"}</strong>
          </div>

          <div className="task-info-item">
            <span>Status</span>
            <strong>{isCompleted ? "Completed" : "Pending"}</strong>
          </div>

          <div className="task-info-item">
            <span>Title</span>
            <strong>{task.title || task.name}</strong>
          </div>

          <div className="task-info-item full-width">
            <span>Description</span>

            <p>
              This is a placeholder description for this task. You can replace
              this with the actual task description later.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="task-details-actions">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>

          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
