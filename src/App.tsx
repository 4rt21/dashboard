import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Reportes from "./pages/Reportes";
import Categorias from "./pages/Categorias";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { createContext } from "react";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="categorias" element={<Categorias />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="*" element={<NotFound />} />

        <Route path="login" element={<Login />} />
      </>
    )
  );

  const isAuthenticated = createContext(false);
  const theme = createContext("light");

  return (
    <main className="">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
