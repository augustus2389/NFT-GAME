import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const fetchWish = createAsyncThunk("wishList/fetchWish", async () => {
  const response = await axiosClient.get("/wishlist");
  return response;
});
export const addToWish = createAsyncThunk(
  "wishList/fetchAddWish",
  async (data) => {
    const response = await axiosClient.post("/wishlist", data);
    return response;
  }
);
export const removeWish = createAsyncThunk(
  "wishList/fetchRemoveWish",
  async (id) => {
    await axiosClient.delete(`/wish/${id}`);
    return id;
  }
);
const wishSlice = createSlice({
  name: "wishList",
  initialState: {
    wishs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWish.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchWish.fulfilled, (state, action) => {
      state.status = "success";
      state.wishs = action.payload;
    });
    builder.addCase(addToWish.fulfilled, (state, action) => {
      state.wishs.push(action.payload);
    });
    builder.addCase(removeWish.fulfilled, (state, action) => {
      let index = state.wishs.findIndex(
        (wishlist) => wishlist.id === action.payload
      );
      state.wishs.splice(index, 1);
    });
  },
});

export default wishSlice.reducer;
