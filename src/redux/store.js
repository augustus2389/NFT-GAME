// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./productSlice.js";

export const store = configureStore({
  reducer: {
    productList: cartReducer,
  },
});
