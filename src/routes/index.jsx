import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import NotFound from "../pages/Landingpage/NotFound";
import Home from "../pages/Landingpage/Home";
// import ShortenUrl from "../pages/Landingpage/ShortenURL/ShortenUrl";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Admin/Dashboard";
import ManageUsers from "../pages/Admin/UsersManagement/ManageUsers";
import BotStatus from "../pages/Admin/WebManagement/BotStatus";
import AdminNotFound from "../pages/Admin/AdminNotFound";

const Routes = () => {
  // const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    // {
    //   path: "/s/:shortUrl",
    //   element: <ShortenUrl />,
    // },
  ];

  // Define routes accessible only to authenticated users
  // eslint-disable-next-line no-unused-vars
  const routesForAuthenticatedOnly = [
    {
      path: "/sb/",
      element: <NotFound />,
    },
    {
      path: "/sb/*",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "manage-users",
          element: <ManageUsers />,
        },
        {
          path: "bot-status",
          element: <BotStatus />,
        },
        {
          path: "*",
          element: <AdminNotFound />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  // eslint-disable-next-line no-unused-vars
  const routesForNotAuthenticatedOnly = [
    {
      path: "/sb/login",
      element: <LoginPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    // ...routesForAuthenticatedOnly,
  ]);
  // Provide the router configuration using RouterProvider
  return (
    <RouterProvider router={router}>
      {/* <FlowbiteInitializer /> */}
      {/* {initFlowbite()} */}
    </RouterProvider>
  );
};

export default Routes;
