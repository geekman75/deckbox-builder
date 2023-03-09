// ** Router imports
import { useRoutes } from "react-router-dom";

// ** Custom Component Import
import Layout from "../components/layout/Layout";

// ** Page Imports
import LandingPage from "../pages/landing";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <LandingPage /> }],
    },
  ]);

  return routes;
};

export default Router;
