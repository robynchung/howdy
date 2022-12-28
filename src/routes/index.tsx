import type { RouteObject } from "react-router-dom";

import Home from "pages/Home";

// styles & components
import Layout from "components/Layout";

export function About() {
  return <div style={{ backgroundColor: "blue" }}>about</div>;
}

export function Skills() {
  return <div style={{ backgroundColor: "purple" }}>skills</div>;
}

export function Contact() {
  return <div style={{ backgroundColor: "pink" }}>contact</div>;
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
      { path: "*", element: <div>dddd</div> },
    ],
  },
];

export default routes;
