import type { RouteObject } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import Skills from "pages/Skills";
import Contact from "pages/Contact";

import Page from "components/Layout/Page";

// styles & components
import Layout from "components/Layout";

export function AboutPage() {
  return <Page title="About" contents={<About />} />;
}

export function SkillsPage() {
  return <Page title="Skills" contents={<Skills />} />;
}

export function ContactPage() {
  return <Page title="Let's Chat!" contents={<Contact />} />;
}

let routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      { path: "*", element: <Home /> },
    ],
  },
];

export default routes;
