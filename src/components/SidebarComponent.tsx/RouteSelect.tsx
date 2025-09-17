import { NavLink } from "react-router-dom";
import { type IconType } from "react-icons";
import { FiHome, FiPaperclip, FiUsers } from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} title="Dashboard" path="" />
      <Route Icon={FiUsers} title="Reportes" path="reportes" />
      <Route Icon={FiPaperclip} title="Categorias" path="categorias" />
    </div>
  );
};

const Route = ({
  Icon,
  title,
  path,
}: {
  Icon: IconType;
  title: string;
  path: string;
}) => {
  return (
    <NavLink
      to={path}
      end={true}
      className={({ isActive }) =>
        `flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
          isActive
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {console.log(
            `${title}: isActive = ${isActive}, current path = ${window.location.pathname}`
          )}
          <Icon className={isActive ? "text-violet-500" : ""} />
          <span>{title}</span>
        </>
      )}
    </NavLink>
  );
};
