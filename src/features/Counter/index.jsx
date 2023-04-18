import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";
import { Button } from "@mui/material";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  //get state
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleInClick = () => {
    //trigger action object
    const action = increase();
    console.log(action);

    //send action to store
    dispatch(action);
  };

  const handleDeClick = () => {
    //trigger action object
    const action = decrease();
    console.log(action);
    //send action to store
    dispatch(action);
  };

  return (
    <div>
      Couter: {counter}
      <Button variant="contained" color="success" onClick={handleInClick}>
        Inc
      </Button>
      <Button variant="contained" color="error" onClick={handleDeClick}>
        Dec
      </Button>
    </div>
  );
}

export default CounterFeature;
