import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BorrowedBooks from "./pages/BorrowedBooks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
      </Routes>
    </Router>
  );
}

export default App;