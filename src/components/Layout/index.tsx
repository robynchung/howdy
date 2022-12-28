import { Outlet } from "react-router-dom";

// styles & components
import Container from "components/Layout/Container";
import Menu from "components/common/Menu";

// data
import menuList from "data/menu.json";

function Layout() {
  return (
    <Container>
      <>
        <Menu menuList={menuList} />
        <Outlet />
      </>
    </Container>
  );
}

export default Layout;
