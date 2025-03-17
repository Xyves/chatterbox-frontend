import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//@ts-ignore
import { fetchUser, registerUser } from "./authActions.js";
//@ts-ignore
import { loginUser } from "./authActions.js";
import { AuthState, UserData } from "../types.js";

const initialState: AuthState = {
  loading: false,
  user: null,
  userToken: null,
  userInfo: null,
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
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUser(state, action: PayloadAction<UserData | null>) {
      state.user = action.payload;
    },
    setUserToken(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setUserInfo(state, action: PayloadAction<object | null>) {
      state.userInfo = action.payload;
    },
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    // registerUser
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
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
            id: payload.id,
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
export const {
  setLoading,
  setUser,
  setUserToken,
  setError,
  setUserInfo,
  setSuccess,
} = authSlice.actions;

export default authSlice.reducer;
