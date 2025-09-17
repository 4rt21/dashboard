import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Reportes from "./components/Reportes";
import Categorias from "./components/Categorias";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="reportes" element={<Reportes />} />
                <Route path="categorias" element={<Categorias />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return (
        <main className="grid gap-4 p-4 grid-cols-[220px,_1fr] min-h-screen bg-gray-100">
            <RouterProvider router={router} />
        </main>
    );
}

export default App;

