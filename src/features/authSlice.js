import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, registerUser } from "./authActions.js";
import { loginUser } from "./authActions.js";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  userToken: null,
  error: null,
  success: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("persist:root");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.user = null;
      state.error = null;
      window.location.replace("/");
    },
  },
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
          state.user = {
            // id: payload.id,
            nickname: payload.nickname,
          };
          state.userToken = payload.userToken;
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        })
        // fetchUser
        .addCase(fetchUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.user = {
            id: payload.id,
            nickname: payload.nickname,
            email: payload.email,
            bio: payload.bio,
            avatar_url: payload.avatar_url,
          };
        })
        .addCase(fetchUser.rejected, (state) => {
          state.loading = false;
          state.user = null;
        });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
