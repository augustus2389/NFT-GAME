import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: "",
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    updateState: (state, action) => {
      return { ...state, new: action.payload };
    },
  },
});
export const { updateState } = statusSlice.actions;
export default statusSlice.reducer;
