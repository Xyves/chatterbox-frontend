import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions.js";
import { loginUser } from "./authActions.js";
const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  // userInfo: localStorage.getItem("id")
  //   ? {
  //       id: localStorage.getItem("id"),
  //       nickname: localStorage.getItem("nickname"),
  //     }
  //   : null,
  userToken: null,
  // localStorage.getItem("userToken"),
  error: null,
  success: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // registerUser
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // loginUser
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.userInfo = { id: payload.id, nickname: payload.nickname };
          state.userToken = payload.userToken;
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        });
  },
});

export default authSlice.reducer;
