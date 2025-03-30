import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//@ts-ignore
import { postComment, fetchMessages } from "./chatActions.js";
import { ChatState, MessageInterface } from "../types.js";
const initialState: ChatState = {
  messages: [],
  error: null,
  success: false,
  status: "",
};

const chatSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessageInterface[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<MessageInterface>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      const exists = state.messages.some(
        (message: MessageInterface) => message.id === action.payload.id
      );
      if (!exists) {
        state.messages.push(action.payload);
      }
    });
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        if (!state) {
          throw new Error("T");
        }
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { addMessage, setMessages } = chatSlice.actions;
export default chatSlice.reducer;
