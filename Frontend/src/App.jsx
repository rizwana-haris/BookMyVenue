
import { Routes, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/NavbarNew";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AddVenue from "./pages/owner/AddVenue";
import OwnerLayout from "./pages/owner/layout/OwnerLayout";
import MyVenues from "./pages/owner/MyVenues";
import Bookings from "./pages/owner/Bookings";
import Earnings from "./pages/owner/Earnings";
import { Outlet } from "react-router-dom";
import AddCategory from "./pages/admin/AddCategory";
import VenueLists from "./pages/user/VenueLists";
import VenueDetails from "./pages/user/VenueDetails";
import Booking from "./pages/Booking";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="booking" element={<Booking />} />

      <Route path="venue/add" element={<AddVenue />} />
      <Route path="category/add" element={<AddCategory />} />
      <Route path="venues" element={<VenueLists />} />
      <Route path="venue-details/:id" element={<VenueDetails />} />

      <Route path="owner" element={<OwnerLayout />}>
       <Route path="my-venues" element={<MyVenues />} />
       <Route path="add-venue" element={<AddVenue />} />
       <Route path="bookings" element={<Bookings />} />
       <Route path="earnings" element={<Earnings />} />
      </Route>

    </Route >
  ));

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div >
  );
}
export default App