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
        body: JSON.stringify({ nickname, email, password }),
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
const fetchUser = createAsyncThunk("user/me", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.userToken;
    if (!token) return thunkAPI.rejectWithValue("No token found");

    const response = await fetch(`${backendUrl}/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();
    console.log("User data fetched:", data);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
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
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Authentication failed");
      }
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
export { registerUser, loginUser, fetchUser };
