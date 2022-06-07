import Button from "@mui/material/Button";
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
}

const ButtonSc = ({ variant, color, label }: ButtonScProps) => {
  return (
    <Button variant={variant} color={color}>
      {label}
    </Button>
  );
};

export default ButtonSc;
