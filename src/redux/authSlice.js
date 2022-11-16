import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async () => {
  const response = await axiosClient.get("/auths");
  return response;
});
export const addToAuth = createAsyncThunk("auth/fetchAddCart", async (data) => {
  const response = await axiosClient.post("/auths", data);
  return response;
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    auths: [],
    account: {},
  },
  reducers: {
    setAccountSuccess(state, action) {
      state.account = action.payload;
      state.isLogin = true;
    },
    setLogout(state, action) {
      state.account = {};
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = "success";
      state.auths = action.payload;
    });
    builder.addCase(addToAuth.fulfilled, (state, action) => {
      state.account = action.payload;
      state.isLogin = true;
    });
  },
});

export const { setAccountSuccess, setLogout } = authSlice.actions;
export default authSlice.reducer;
