import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";

import type { RouteObject } from "react-router-dom";

// styles
import Container from "components/Layout/Container";
import Menu from "components/common/Menu";

// data
import menuList from "data/menu.json";

export function Layout() {
  return (
    <Container>
      <>
        <Menu menuList={menuList} />
        <Outlet />
      </>
    </Container>
  );
}

export function Home() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <Typewriter
        options={{
          strings: [
            "Aeri Jung",
            "I do Front-end",
            "also Back-end",
            "so ...",
            "I do Full-Stack!",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
}

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
