import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendUrl = "messaging-app-backend-production-b29f.up.railway.app/api";
const backendUrl = "http://127.0.0.1:4000/api";
const registerUser = createAsyncThunk(
  "auth/register",
  async ({ nickname, password, email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ nickname, email, password }), // Add body here
      };
      await fetch(`${backendUrl}/auth/register`, config);
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const loginUser = createAsyncThunk(
  "auth/login",
  async ({ nickname, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ nickname, password }),
      };
      const response = await fetch(`${backendUrl}/auth/login`, config);
      const data = await response.json();
      localStorage.setItem("userToken", data.userToken);
      localStorage.setItem("id", data.id);
      console.log(data);
      return {
        id: data.id,
        nickname: data.nickname,
        userToken: data.userToken,
      };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export { registerUser, loginUser };
