import { useForm, SubmitHandler } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import emailjs from "@emailjs/browser";

import { SubContainer } from "components/Layout/Container";
import { StyledSubmitContainer } from "styles/Contact";
import { StyledButton } from "styles/Menu";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

type FormInputType = {
  key: keyof IFormInput;
  props: {
    label: string;
    multiline?: boolean;
    rows?: number;
  };
  option: {
    required?: boolean;
    pattern?: RegExp;
  };
};

const formList: Array<FormInputType> = [
  {
    key: "fullName",
    props: {
      label: "Full Name",
    },
    option: { required: true },
  },

  {
    key: "email",
    props: {
      label: "E-mail",
    },
    option: {
      required: true,
      pattern:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
    },
  },

  {
    key: "message",
    props: {
      label: "Message",
      rows: 10,
      multiline: true,
    },
    option: {
      required: true,
    },
  },
];

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(process.env);
    const {
      REACT_APP_EMAIL_PUBLIC_KEY: public_id,
      REACT_APP_EMAIL_SERVICE_ID: service_id,
      REACT_APP_EMAIL_TEMPLATE_ID: template_id,
    } = process.env;

    emailjs.send(service_id, template_id, {}, public_id);
  };

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
          {formList.map((item: FormInputType) => {
            return (
              <Grid key={item.key} item xs={12}>
                <TextField
                  error={item.key in errors}
                  fullWidth
                  required
                  helperText={renderErrorMessage(errors?.[item.key]?.type)}
                  variant="filled"
                  {...register(item.key, item.option)}
                  {...item.props}
                />
              </Grid>
            );
          })}

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
