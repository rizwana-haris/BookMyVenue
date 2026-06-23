import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  CalendarDays,
  Wallet
} from "lucide-react";

export default function OwnerSidebar() {
  return (
    <div className="w-80 min-h-screen bg-gray-900 text-white p-4">

      <h2 className="text-lg font-bold mb-6 whitespace-nowrap">
        Owner Dashboard
      </h2>

      <ul className="space-y-4">

        <li>
          <NavLink
            to="/owner/my-venues"
            style={{ 
              textDecoration: "none",
              color: "inherit"
             }}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition duration-200
              ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "text-gray-500 hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard
                size={18}
                className="text-inherit"
              />
              <span className="text-inherit">
                My Venues
              </span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/owner/add-venue"
            style={{ 
              textDecoration: "none",
              color: "inherit"
             }}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition duration-200
              ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "text-gray-500 hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <PlusCircle
                size={18}
                className="text-inherit"
              />
              <span className="text-inherit">
                Add Venue
              </span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/owner/bookings"
            style={{ 
              textDecoration: "none",
              color: "inherit"
             }}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition duration-200
              ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "text-gray-500 hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <CalendarDays
                size={18}
                className="text-inherit"
              />
              <span className="text-inherit">
                Bookings
              </span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/owner/earnings"
            style={{ 
              textDecoration: "none",
              color: "inherit"
             }}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition duration-200
              ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "text-gray-500 hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <Wallet
                size={18}
                className="text-inherit"
              />
              <span className="text-inherit">
                Earnings
              </span>
            </div>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}