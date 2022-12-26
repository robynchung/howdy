import React from "react";
import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { styled } from "@mui/material/styles";

import Section from "ui/Layout/Section";
import Name from "ui/Title/Name";
import Contact from "ui/component/Contact";

const NameBox = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "right",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  };
});

const ContactBox = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      alignItems: "center",

      "& div": {
        marginBottom: 10,
      },
    },
  };
});

function NameSection() {
  return (
    <>
      <Section
        leftColumns={{ md: 7, sm: 12 }}
        rightColumns={{ md: 5, sm: 12 }}
        leftComp={
          <NameBox>
            <Name name="<Aeri Jung />" />
          </NameBox>
        }
        rightComp={
          <ContactBox>
            <Contact isWeb={true} />
            <Button variant="outlined" size="small" startIcon={<SaveAltIcon />}>
              Download Resume
            </Button>
          </ContactBox>
        }
      />
    </>
  );
}

export default NameSection;
