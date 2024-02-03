import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentNum: 0,
  },
  reducers: {
    increment: (state) => {
      state.currentNum += 1;
    },
    decrement: (state) => {
      state.currentNum -= 1;
    },
    incrementByValue: (state, action) => {
      state.currentNum += action.payload;
    },
  },
});

export const { decrement, increment, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;