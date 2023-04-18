import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
//import InputField from "../../../../components/form-controls/InputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  //yup
  const schema = yup.object().shape({
    title: yup.string().required("Please enter title"),
  });

  //form
  const myForm = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  //user click submit
  const handleUserSubmit = (values) => {
    //console.log("Todo form", values);
    if (onSubmit) {
      onSubmit(values); //call method parents
    }

    myForm.reset();
  };

  return (
    <form onSubmit={myForm.handleSubmit(handleUserSubmit)}>
      <InputField name="title" label="Todo" form={myForm} />
    </form>
  );
}

export default TodoForm;
