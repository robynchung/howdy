import React from "react";
import Drawer from "@mui/material/Drawer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";

// components
import useMenu from "hooks/useMenu";

// styles & types
import { StyledFloatContainer } from "styles/Menu";
import type { MenuProps, IconProps } from "types/menu";

function Menu({ menuList }: MenuProps) {
  const { toggleDrawer, state } = useMenu();

  return (
    <>
      <FloatContainer handleToggle={() => toggleDrawer(true)} />

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

function FloatContainer({ handleToggle }: IconProps) {
  return (
    <StyledFloatContainer>
      <div>ddd</div>
      <DragHandleIcon
        color="primary"
        fontSize="large"
        onClick={() => handleToggle(true)}
      />
    </StyledFloatContainer>
  );
}

export default Menu;
