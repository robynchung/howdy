import { useForm, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { SubContainer } from "components/Layout/Container";
import { StyledSubmitContainer } from "styles/Contact";
import { StyledButton } from "styles/Menu";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const renderErrorMessage = (type: string | undefined): string => {
    switch (type) {
      case "required":
        return "This field is required";

      case "pattern":
        return "This value doesn't meet requirement";

      default:
        return "";
    }
  };

  return (
    <SubContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              error={"fullName" in errors}
              fullWidth
              required
              helperText={renderErrorMessage(errors?.fullName?.type)}
              label="Full Name"
              variant="filled"
              {...register("fullName", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={"email" in errors}
              fullWidth
              required
              label="E-mail"
              variant="filled"
              helperText={renderErrorMessage(errors?.email?.type)}
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Message"
              variant="filled"
              rows={10}
              helperText={renderErrorMessage(errors?.message?.type)}
              multiline
              {...register("message", { required: true })}
            />
          </Grid>
          <StyledSubmitContainer item xs={12}>
            <StyledButton
              variant="outlined"
              size="medium"
              startIcon={<FileDownloadIcon />}
              type="submit"
            >
              Submit
            </StyledButton>
          </StyledSubmitContainer>
        </Grid>
      </form>
    </SubContainer>
  );
}

export default Contact;
