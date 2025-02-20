import { createAsyncThunk } from "@reduxjs/toolkit";

// const backendUrl = "messaging-app-backend-production-b29f.up.railway.app/api";
const backendUrl = "http://127.0.0.1:4000/api";
const postComment = createAsyncThunk(
  "chat/comment",
  async ({ chat_id, id, content }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ user_id: id, content }),
      };
      await fetch(`${backendUrl}/${chat_id}/message`, config);
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
export { postComment };
