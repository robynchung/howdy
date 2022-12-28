import type { RouteObject } from "react-router-dom";

import Home from "pages/Home";
import Page from "components/Layout/Page";

// styles & components
import Layout from "components/Layout";

export function About() {
  return <Page title="About" contents={<>ddd</>} />;
}

export function Skills() {
  return <Page title="Skills" contents={<>ddd</>} />;
}

export function Contact() {
  return <Page title="Contact" contents={<>ddd</>} />;
}

let routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "*", element: <Home /> },
    ],
  },
];

export default routes;
