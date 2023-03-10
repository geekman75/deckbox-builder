// ** Router imports
import { useRoutes } from "react-router-dom";

// ** Custom Component Import
import Layout from "components/layout/Layout";

// ** Page Imports
import Page1 from "pages/page1";
import Page2 from "pages/page2";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Page1 /> }],
    },
    {
      path: "/page2",
      element: <Layout />,
      children: [{ path: "/page2", element: <Page2 /> }],
    }
  ]);

  return routes;
};

export default Router;
