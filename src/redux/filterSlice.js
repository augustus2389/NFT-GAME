import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterList: [],
  },
  reducers: {
    addFilterList(state, action) {
      state.filterList.push(action.payload);
    },
    removeFilter(state, action) {
      const id = action.payload;
      state.filterList = state.filterList.filter((item) => item.id !== id);
    },
  },
});
export const { addFilterList, removeFilter } = filterSlice.action;
export default filterSlice.reducer;
