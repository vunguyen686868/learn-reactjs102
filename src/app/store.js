import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/Auth/userSlice";
import counterReducer from "../features/Counter/counterSlice";

//list reducers
const rootReducer = {
  counter: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
