import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useController } from "react-hook-form";

PasswordField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function PasswordField(props) {
  const { control, name, label, ...rest } = props; //...rest rest fields of MUI control

  const [showPassword, SetShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    SetShowPassword((x) => !x);
  };
  //Get all props in control React Hook Form
  const {
    field: { onChange, value },
    //field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl error={!!error} fullWidth variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />

      <FormHelperText error={!!error}>{error?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
