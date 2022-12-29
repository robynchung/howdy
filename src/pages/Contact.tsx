import { useForm, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { StyledContainer, StyledBox } from "styles/About";
import { StyledSubmitContainer } from "styles/Contact";
import { StyledButton } from "styles/Menu";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  interface IFormInput {
    fullName: string;
    email: string;
    message: string;
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <StyledContainer>
      <StyledBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="filled"
                {...register("fullName", { required: true, maxLength: 20 })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                variant="filled"
                {...register("email", { required: true, maxLength: 20 })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="filled"
                maxRows={10}
                rows={10}
                multiline
                {...register("message", { required: true, maxLength: 20 })}
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
      </StyledBox>
    </StyledContainer>
  );
}

export default Contact;
