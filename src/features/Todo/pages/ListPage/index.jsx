import React from "react";
import PropTypes from "prop-types";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const handleTodoFormSubmit = (values) => {
    console.log("Form submit", values);
  };
  return (
    <div>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default ListPage;
