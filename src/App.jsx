import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import TaskDetails from "./pages/taskdetails/TaskDetails";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/taskdetails/:id" element={<TaskDetails />}></Route>
      </Routes>
    </>
  );
};

export default App;
