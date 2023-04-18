import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, LinearProgress, Typography } from "@mui/material";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit }) {
  //yup
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .required("Please enter email.")
      .email("Please enter a valid email."),
    password: yup
      .string()
      .required("Please enter password")
      .min(6, "Please enter at least 6 chars"),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  //setup form
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  //user click submit --> Call Register Parent
  const handleUserSubmit = async (values) => {
    console.log("Todo form", values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <Box
      sx={{
        paddingTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#9c27b0" }}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography
        component={"h3"}
        variant="h5"
        sx={{
          textAlign: "center",
          padding: "2px 0px 4px 0px",
        }}
      >
        Create An Account
      </Typography>

      <form onSubmit={handleSubmit(handleUserSubmit)}>
        {isSubmitting && <LinearProgress />}
        <InputField
          sx={{ my: 1 }}
          name="fullName"
          label="Full Name"
          control={control}
        />
        <InputField
          sx={{ my: 1 }}
          name="email"
          label="Email"
          control={control}
        />
        <PasswordField
          sx={{ my: 1 }}
          name="password"
          label="Password"
          control={control}
        />
        <PasswordField
          sx={{ my: 1 }}
          name="retypePassword"
          label="Retype Password"
          control={control}
        />
        <Button
          disabled={isSubmitting}
          sx={{ my: 4 }}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Create an account
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
