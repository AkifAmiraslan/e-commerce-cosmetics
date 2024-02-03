import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import backgroundReducer from "./navSlice"

const store = configureStore({
  reducer: {
    counter: counterSlice,
    background: backgroundReducer,
  },
  
});

export default store;
