// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import cartSlice from "./cartSlice.js";
import wishlistSlice from "./wishlistSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    wish: wishlistSlice,
  },
});
