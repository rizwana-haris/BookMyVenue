import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarNew";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}