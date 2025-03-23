import { Box, Container, Flex } from "@chakra-ui/react";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import Message from "./Message";
import { MessageInterface, UserData } from "../../../types";

export default function MessageList({
  selectedFriend,
}: {
  selectedFriend: UserData;
}) {
  const messages = useSelector((state: RootState) => state.messages.messages);
  return (
    <Box
      bg="#216869"
      paddingTop="10"
      paddingBottom={"5"}
      minH="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
    >
      {messages && messages.length > 0 ? (
        messages.map((message: MessageInterface) => (
          <Message
            message={message}
            key={message.id}
            selectedFriend={selectedFriend}
          />
        ))
      ) : (
        <Flex
          alignItems="center"
          marginTop="auto"
          paddingLeft="10"
          fontSize="2xl"
        >
          <p>Messages not found</p>
        </Flex>
      )}
    </Box>
  );
}
