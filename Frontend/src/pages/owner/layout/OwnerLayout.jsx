import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";

export default function OwnerLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <OwnerSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}