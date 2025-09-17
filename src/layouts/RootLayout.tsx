import { useContext } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { DarkThemeContext } from "../App";

const RootLayout = () => {
  const { theme } = useContext(DarkThemeContext);
  return (
    <div
      className={`grid gap-4 p-4 grid-cols-[220px_1fr] ${
        theme ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
