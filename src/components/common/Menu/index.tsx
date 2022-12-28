import React from "react";
import Drawer from "@mui/material/Drawer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";

// components
import useMenu from "hooks/useMenu";

// styles & types
import { StyledIconContainer } from "styles/Menu";
import type { MenuProps, IconProps } from "types/menu";

function Menu({ menuList }: MenuProps) {
  const { toggleDrawer, state } = useMenu();

  return (
    <>
      <MenuIcon handleToggle={() => toggleDrawer(true)} />

      <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer(false)}>
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
      <DragHandleIcon
        color="primary"
        fontSize="large"
        onClick={() => handleToggle(true)}
      />
    </StyledIconContainer>
  );
}

export default Menu;
