import { createAsyncThunk } from "@reduxjs/toolkit";
const backendUrl = import.meta.env.VITE_BACKENDURL;

const postComment = createAsyncThunk(
  "chat/comment",
  async ({ chat_id, sender_id, content }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.userToken;

      if (!token) return thunkAPI.rejectWithValue("No token found");
      const response = await fetch(`${backendUrl}/chat/${chat_id}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender_id: sender_id, content: content }),
        Authorization: `Bearer ${token}`,
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (chat_id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.userToken;
      if (!token) return thunkAPI.rejectWithValue("No token found");
      const response = await fetch(`${backendUrl}/chat/${chat_id}/message`, {
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
      // console.log("fetched messages:", data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Unknown error");
    }
  }
);
export { postComment, fetchMessages };
