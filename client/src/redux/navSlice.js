// src/features/backgroundSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundColor: '',
  textColor: '',
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setHomeBackground: (state) => {
      state.backgroundColor = 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)';
      state.textColor = '#FFFFFF';
    },
    setOtherBackground: (state) => {
      state.backgroundColor = '#FFFFFF';
      state.textColor = '#000000';
    },
  },
});

export const { setHomeBackground, setOtherBackground } = backgroundSlice.actions;
export const selectBackgroundColor = (state) => state.background.backgroundColor;
export const selectTextColor = (state) => state.background.textColor;
export default backgroundSlice.reducer;
