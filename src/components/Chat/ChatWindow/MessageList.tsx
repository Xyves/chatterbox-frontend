import { Box, Container } from "@chakra-ui/react";
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
    <Container bg={"#216869"} height="full">
      {messages && messages.length > 0 ? (
        messages.map((message: MessageInterface) => (
          <Message
            message={message}
            key={message.id}
            selectedFriend={selectedFriend}
          />
        ))
      ) : (
        <p>Not found</p>
      )}
    </Container>
  );
}
