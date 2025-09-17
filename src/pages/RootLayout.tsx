import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default RootLayout;

