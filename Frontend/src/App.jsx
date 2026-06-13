
import { Routes, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/NavbarNew";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AddVenue from "./pages/owner/AddVenue";
import { Outlet } from "react-router";
import AddCategory from "./pages/admin/AddCategory";
import VenueLists from "./pages/user/VenueLists";
import VenueDetails from "./pages/user/VenueDetails";
import { ToastContainer } from "react-toastify";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="venue/add" element={<AddVenue />} />
      <Route path="category/add" element={<AddCategory />} />
      <Route path="venues" element={<VenueLists />} />
      <Route path="venue-details/:id" element={<VenueDetails />} />

    </Route >
  ))

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Outlet />
    </div>
  );
}
export default App