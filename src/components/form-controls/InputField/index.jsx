import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

function InputField(props) {
  const { control, name, ...rest } = props; //...rest rest fields of MUI control

  //Get all props in control React Hook Form
  const {
    //field: { onChange, value },
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      error={!!error}
      helperText={error?.message}
      name={name}
      variant="outlined"
      {...field}
      {...rest}
    />
  );
}

export default InputField;
