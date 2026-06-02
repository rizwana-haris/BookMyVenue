import { Search } from "lucide-react";
import Button from "./ButtonNew"

export default function Navbar() {
  const isLoggedIn = false;

  const keralaDistricts = [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod",
  ];

  return (
    <nav className="w-full bg-[#FDFFF0] shadow-md px-6 py-4 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-3">

        {/* Logo */}
        <div className="w-10 h-10 bg-[#EC3946] rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>

        {/* Website Name */}
        <h1 className="text-2xl font-bold text-[#EC3946]">
          BookMyVenue
        </h1>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4">

       

        {/* Search Bar */}
        <div className="flex items-center border border-[#E5E5E5] rounded-xl px-3 py-2 w-120">
          <Search className="text-gray-500 mr-2" size={18} />

          <input
            type="text"
            placeholder="Search for a venue..."
            className="outline-none w-full"
          />
        </div>

        {/* Location Dropdown */}
        <select className="border border-[#E5E5E5] text-gray-500 rounded-xl px-3 py-2 outline-none focus:ring-1 focus:ring-red-200">
          {keralaDistricts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {!isLoggedIn ? (
          <>
            <Button buttonV="primary">
              Login
            </Button>

            <Button buttonV="outline">
              Sign Up
            </Button>
          </>
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        )}
      </div>
    </nav>
  );
}

