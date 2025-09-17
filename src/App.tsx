import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Reportes from "./pages/Reportes";
import Categorias from "./pages/Categorias";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import { createContext, useState } from "react";

export const DarkThemeContext = createContext({
  theme: false,
  setTheme: (value: boolean | ((prev: boolean) => boolean)) => {},
});
function App() {
  const [theme, setTheme] = useState<boolean>(false);

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

  return (
    <DarkThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </DarkThemeContext.Provider>
  );
}

export default App;
