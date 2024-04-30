import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentButtonText: "Start"
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    switchButton: (state) => {
      state.currentButtonText = state.currentButtonText === "Start" ? "Back" : "Start";
    }
  },
});

export const { switchButton } = buttonSlice.actions;
export default buttonSlice.reducer;
