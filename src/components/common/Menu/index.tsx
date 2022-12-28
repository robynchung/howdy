import React from "react";
import Drawer from "@mui/material/Drawer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

// components
import useMenu from "hooks/useMenu";
import social from "data/social.json";

// styles & types
import { StyledFloatContainer, StyledIconContainer } from "styles/Menu";
import type { MenuProps, IconProps, SocialProps } from "types/menu";

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

function Social({ socialList }: SocialProps) {
  const renderSocialIcon = (name: string): JSX.Element | null => {
    switch (name) {
      case "linked-in":
        return <LinkedInIcon color="primary" fontSize="small" />;

      case "github":
        return <GitHubIcon color="primary" fontSize="small" />;

      case "email":
        return <MailIcon color="primary" fontSize="small" />;

      default:
        return null;
    }
  };

  return (
    <StyledIconContainer container spacing={1}>
      {socialList.map((social) => {
        const icon = renderSocialIcon(social.name);

        return (
          <Grid item key={social.name}>
            <a href={social.link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </Grid>
        );
      })}
    </StyledIconContainer>
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
