import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set username == email
      values.username = values.email;

      //console.log("Register login", values);
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      console.log("new user", user);

      //dosomething here
    } catch (error) {
      console.log("Failed to register", error);
    }
  };
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
}

export default Register;
