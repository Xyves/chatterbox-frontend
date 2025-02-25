import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postComment } from "./chatActions";
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
      state.messages.push(action.payload);
    });
  },
});
export const { addMessage, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
