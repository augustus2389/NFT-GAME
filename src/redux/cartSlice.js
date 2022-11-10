import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axiosClient.get("/cart");
  return response;
});
export const addToCart = createAsyncThunk("cart/fetchAddCart", async (data) => {
  const response = await axiosClient.post("/cart", data);
  return response;
});
export const removeCart = createAsyncThunk(
  "cart/fetchRemoveCart",
  async (id) => {
    await axiosClient.delete(`/cart/${id}`);
    return id;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.status = "success";
      state.carts = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.carts.push(action.payload);
    });
    builder.addCase(removeCart.fulfilled, (state, action) => {
      let index = state.carts.findIndex((cart) => cart.id === action.payload);
      state.carts.splice(index, 1);
    });
  },
});

export default cartSlice.reducer;
