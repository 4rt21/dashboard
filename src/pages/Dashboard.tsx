import { TopBar } from "../components/TopBar";
import { Grid } from "../components/Grid";

const Dashboard = () => {
    return (
        <div className="bg-white rounded-lg pb-4 shadow">
            <TopBar />
            <Grid />
        </div>
    );
};

export default Dashboard;

