import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import User from "./User";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMessages } from "../../../features/chatActions";

export default function MainChat({ setMessages, selectedFriend }) {
  const { id: chat_id } = useParams();
  const dispatch = useDispatch();
  console.log("selected friend:", selectedFriend);

  const { loading, user, error } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchMessages(chat_id));
  }, [dispatch, chat_id]);
  const messages = useSelector((state) => state.messages.messages);

  return (
    <Box
      margin="16"
      background="green.600"
      height="2xl"
      display="flex"
      flexDirection="column"
    >
      <User user={selectedFriend} />
      <Box flex="1" overflow="auto">
        <MessageList messages={messages} selectedFriend={selectedFriend} />
      </Box>
      <Box width="full " padding="6">
        <ChatInput setMessages={setMessages} messages={messages} />
      </Box>
    </Box>
  );
}
