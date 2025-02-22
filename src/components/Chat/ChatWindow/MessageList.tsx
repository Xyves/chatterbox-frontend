import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RootState } from "../../../app/store";
import { Avatar } from "../../ui/avatar";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function MessageList() {
  const messages = useSelector((state: RootState) => state.messages.messages);
  const { loading, user, error } = useSelector((state) => state.auth);
  return (
    <Box>
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message message={message} key={message.id} />
        ))
      ) : (
        <p>Not found</p>
      )}
    </Box>
  );
}
