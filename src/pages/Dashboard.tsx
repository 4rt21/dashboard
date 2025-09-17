import { TopBar } from "../components/TopBar";
import { Grid } from "../components/Grid";
import { useContext } from "react";
import { DarkThemeContext } from "../App";

const Dashboard = () => {
  const { theme } = useContext(DarkThemeContext);

  return (
    <div
      className={`${theme ? "bg-gray-900" : "bg-white"} rounded-lg pb-4 shadow`}
    >
      <TopBar />
      <Grid />
    </div>
  );
};

export default Dashboard;
