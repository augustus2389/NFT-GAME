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
export const fetchOrder = createAsyncThunk("order/fetchOrder", async (data) => {
  const response = await axiosClient.get("/orders");
  return response;
});

export const addOrder = createAsyncThunk("order/fetchOreder", async (data) => {
  const response = await axiosClient.post("/orders", data);
  return response;
});

export const clearCart = createAsyncThunk("cart/clearCart", async (id) => {
  await axiosClient.delete(`/cart/${id}`);
  return id;
});
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    orders: [],
    isCart: false,
  },
  reducers: {
    setOrderSuccess(state, action) {
      state.orders = action.payload;
      state.isCart = true;
    },
  },
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
      state.isCart = false;
    });
    builder.addCase(removeCart.fulfilled, (state, action) => {
      let index = state.carts.findIndex((cart) => cart.id === action.payload);
      state.carts.splice(index, 1);
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
    });
  },
});
export const { setOrderSuccess } = cartSlice.actions;

export default cartSlice.reducer;
