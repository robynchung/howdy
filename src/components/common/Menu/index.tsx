import React from "react";
import { Link } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Drawer from "@mui/material/Drawer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { saveAs } from "file-saver";
import CloseIcon from "@mui/icons-material/Close";

// components
import useMenu from "hooks/useMenu";
import social from "data/social.json";
import resumeFile from "assets/resume.pdf";

// styles & types
import {
  StyledFloatContainer,
  StyledIconContainer,
  StyledButton,
  StyledButtonBox,
  StyledCloseBox,
  StyledDrawer,
  StyledMenuListBox,
  StyledMenuListContainer,
} from "styles/Menu";
import type { MenuProps, IconProps, SocialProps } from "types/menu";

function Menu({ menuList }: MenuProps) {
  const { toggleDrawer, state } = useMenu();

  return (
    <>
      <FloatContainer handleToggle={() => toggleDrawer(true)} />

      <StyledDrawer
        anchor={"right"}
        open={state}
        onClose={() => toggleDrawer(false)}
        style={{
          width: "100%",
        }}
        sx={{ width: "100%" }}
      >
        <StyledMenuListContainer container>
          <StyledCloseBox item xs={12} flexShrink={0}>
            <CloseIcon
              color="primary"
              fontSize="large"
              onClick={() => toggleDrawer(false)}
            />
          </StyledCloseBox>

          <StyledMenuListBox item xs={12} flexShrink={3}>
            {menuList.map((menu) => {
              return (
                <Link key={menu.to} to={menu.to}>
                  {menu.name}
                </Link>
              );
            })}
          </StyledMenuListBox>
        </StyledMenuListContainer>
      </StyledDrawer>
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

  const downloadResume = () => {
    saveAs(resumeFile, "Aeri_Jung.pdf");
  };

  return (
    <StyledIconContainer container spacing={2} alignItems="center">
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
      <StyledButtonBox item>
        <StyledButton
          variant="outlined"
          size="small"
          startIcon={<FileDownloadIcon />}
          onClick={downloadResume}
        >
          Download CV
        </StyledButton>
      </StyledButtonBox>
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
