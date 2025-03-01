import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendUrl = "messaging-app-backend-production-b29f.up.railway.app/api";
const backendUrl = "http://127.0.0.1:4000/api";

const postComment = createAsyncThunk(
  "chat/comment",
  async ({ chat_id, sender_id, content }, thunkAPI) => {
    try {
      console.log(sender_id);
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
      console.log("Backend response:", data);
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
export { postComment };
