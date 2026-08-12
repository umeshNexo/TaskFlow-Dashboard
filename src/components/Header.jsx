import { useContext } from "react";
import { Context } from "../context/Context";
import "../pages/dashboard/Dashboard.css";

const Header = () => {
  const { allTasks } = useContext(Context);

  const completed = allTasks.filter((item) => item.completed === true);

  return (
    <header className="dashboard-header">
      <h1 className="dashboard-title">TaskFlow Dashboard</h1>

      <div className="completed-wrapper">
        <p className="completed-label">Completed:</p>

        <span className="completed-count">{completed.length}</span>
      </div>
    </header>
  );
};

export default Header;
