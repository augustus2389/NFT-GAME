// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";
import userSlice from "./userSlice.js";
import wishlistSlice from "./wishlistSlice.js";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    auth: authSlice,
    wish: wishlistSlice,
    user: userSlice,
  },
});
