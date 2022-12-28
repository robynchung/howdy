import React from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";

import { styled } from "@mui/system";

import DragHandleIcon from "@mui/icons-material/DragHandle";

type Anchor = string;
type MenuType = {
  to: string;
  name: string;
};

type Props = {
  menuList: Array<MenuType>;
};

type IconProps = {
  handleToggle: (event: React.MouseEvent) => void;
};

const StyledIconContainer = styled("div")({
  position: "absolute",
  top: 20,
  right: 20,
});

function Menu({ menuList }: Props) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const handleToggle = React.useCallback((event: React.MouseEvent) => {
    toggleDrawer(true)(event);
  }, []);

  return (
    <>
      <MenuIcon handleToggle={handleToggle} />

      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {menuList.map((menu) => {
          return (
            <Link key={menu.to} to={menu.to}>
              {menu.name}
            </Link>
          );
        })}
      </Drawer>
    </>
  );
}

function MenuIcon({ handleToggle }: IconProps) {
  return (
    <StyledIconContainer>
      <DragHandleIcon color="primary" fontSize="large" onClick={handleToggle} />
    </StyledIconContainer>
  );
}

export default Menu;
