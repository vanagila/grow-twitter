import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  { path: "/home", element: <Home /> },
]);

export const RoutesApp = () => {
  return <RouterProvider router={router} />;
};
