import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postComment, fetchMessages } from "./chatActions";
const initialState = {
  messages: [],
  error: null,
  success: false,
};
interface Message {
  sender_id: string;
  isRead: boolean;
  content: string;
  time: string;
  chat_id: string;
}
interface MessagesState {
  messages: Message[];
}
const chatSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      const exists = state.messages.some((msg) => msg.id === action.payload.id);
      if (!exists) {
        state.messages.push(action.payload);
      }
    });
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        console.log("Updating Redux state with messages:", action.payload); // Debugging
        state.status = "succeeded";
        state.messages = action.payload; // Make sure this is an array
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { addMessage, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
