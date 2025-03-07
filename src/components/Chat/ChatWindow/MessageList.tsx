import { Box, Heading, Text } from "@chakra-ui/react";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function MessageList({ selectedFriend }) {
  const messages = useSelector((state: RootState) => state.messages.messages);
  return (
    <Box bg={"#FCAB10"}>
      {messages && messages.length > 0 ? (
        messages.map((message) => (
          <Message
            message={message}
            key={message.id}
            selectedFriend={selectedFriend}
          />
        ))
      ) : (
        <p>Not found</p>
      )}
    </Box>
  );
}
