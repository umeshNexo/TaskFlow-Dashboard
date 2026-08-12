import { useState } from "react";
import { Context } from "./Context";
import { createTask, deleteTask, fetchTasks, updateTask } from "../api";

function ContextProvider({ children }) {
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [task, setTask] = useState("");

  async function loadTasks() {
    if (allTasks.length > 0) {
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await fetchTasks();
      return setAllTasks(data);
    } catch (error) {
      setError("Failed to get tasks.", error);
    } finally {
      setLoading(false);
    }
  }

  const AddTask = async (title) => {
    setError("");

    try {
      const data = await createTask(title);
      console.log(data);

      setAllTasks((prev) => [
        {
          id: Math.random().toString(36).substring(2, 10),
          title: data.title,
          completed: data.completed,
          userId: data.userId,
        },
        ...prev,
      ]);
    } catch (error) {
      setError("Failed to Add Data", error);
    }
  };

  const UpdateTask = async (id, changes) => {
    setError("");
    try {
      const data = await updateTask(id, changes);
      console.log(data);

      setAllTasks((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, completed: data.completed ? data.completed : false }
            : item,
        ),
      );
    } catch (error) {
      setError("Failed to Update task", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const data = await deleteTask(id);
      console.log(data);

      const filteredTask = allTasks.filter((task) => {
        return task.id !== id;
      });

      setAllTasks(filteredTask);
    } catch (error) {
      setError("Failed to delete Task", error);
    }
  };

  return (
    <Context.Provider
      value={{
        allTasks,
        setAllTasks,
        task,
        setTask,
        loading,
        setLoading,
        error,
        setError,
        loadTasks,
        AddTask,
        UpdateTask,
        handleDeleteTask,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
