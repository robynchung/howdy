import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { saveAs } from "file-saver";

// styles & types
import {
  StyledIconContainer,
  StyledButton,
  StyledButtonBox,
} from "styles/Menu";

// etc
import resumeFile from "assets/resume.pdf";
import type { SocialProps } from "types/menu";

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

export default Social;
