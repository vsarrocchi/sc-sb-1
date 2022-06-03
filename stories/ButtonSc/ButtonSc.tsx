import Button from "@mui/material/Button";

interface ButtonScProps {
  variant: string;
  label: string;
}

const ButtonSc = ({
  variant,
  label,
}: ButtonScProps) => {
  return <Button variant={variant}>{label}</Button>;
};

export default ButtonSc;
