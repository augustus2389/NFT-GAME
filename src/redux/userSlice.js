import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axiosClient.get("/users");
  return response;
});
export const addUser = createAsyncThunk("user/fetchAddUser", async (data) => {
  const response = await axiosClient.post("/users", data);
  return response;
});
export const editUser = createAsyncThunk("user/editUser", async (data) => {
  const response = await axiosClient.put(`/users/${data.id}`, data);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      let index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[index] = action.payload;
    });
  },
});

export default userSlice.reducer;
