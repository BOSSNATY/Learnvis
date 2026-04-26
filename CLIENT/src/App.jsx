import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/student/Dashboard";
// import Landing from "./pages/Landing"; // We'll create this next

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* We will add /dashboard later */}
      </Routes>
    </Router>
  );
}

export default App;
