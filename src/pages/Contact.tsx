import { useForm, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { SubContainer } from "components/Layout/Container";
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
    <SubContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Full Name"
              variant="filled"
              {...register("fullName", { required: true, maxLength: 20 })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="E-mail"
              variant="filled"
              {...register("email", { required: true, maxLength: 20 })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
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
    </SubContainer>
  );
}

export default Contact;
