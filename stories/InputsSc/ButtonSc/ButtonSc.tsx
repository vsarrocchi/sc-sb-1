import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { tokenRed } from "../../../styles/design-tokens";

const theme = createTheme({
  palette: {
    primary: {
      main: tokenRed,
    },
  },
});
interface ButtonScProps {
  variant: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  label: string;
  disabled?: boolean;
  size: "small" | "medium" | "large";
}

const ButtonSc = ({ variant, color, label, disabled, size }: ButtonScProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant={variant} color="primary" disabled={disabled} size={size}>
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonSc;
