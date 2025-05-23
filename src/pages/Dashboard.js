import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}
export default Dashboard;
