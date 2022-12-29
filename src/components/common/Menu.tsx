import React from "react";
import { Link } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

// components
import useMenu from "hooks/useMenu";
import social from "data/social.json";

// styles & types
import {
  StyledFloatContainer,
  StyledCloseBox,
  StyledDrawer,
  StyledMenuListBox,
} from "styles/Menu";
import type { MenuProps, IconProps } from "types/menu";
import Social from "components/common/Social";

function Menu({ menuList }: MenuProps) {
  const { toggleDrawer, state } = useMenu();

  return (
    <>
      <FloatContainer handleToggle={() => toggleDrawer(true)} />

      <StyledDrawer
        anchor={"right"}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <StyledCloseBox>
          <CloseIcon
            color="primary"
            fontSize="large"
            onClick={() => toggleDrawer(false)}
          />
        </StyledCloseBox>

        <StyledMenuListBox>
          {menuList.map((menu) => {
            return (
              <Link
                key={menu.to}
                to={menu.to}
                onClick={() => toggleDrawer(false)}
              >
                {menu.name}
              </Link>
            );
          })}
        </StyledMenuListBox>

        <Social socialList={social} />
      </StyledDrawer>
    </>
  );
}

function FloatContainer({ handleToggle }: IconProps) {
  return (
    <StyledFloatContainer>
      <Social socialList={social} />
      <DragHandleIcon
        color="primary"
        fontSize="large"
        onClick={() => handleToggle(true)}
      />
    </StyledFloatContainer>
  );
}

export default Menu;
