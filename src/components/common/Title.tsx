import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props) {
  return <Typography variant="h3">{children}</Typography>;
}

export default Title;
