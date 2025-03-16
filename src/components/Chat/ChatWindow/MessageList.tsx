import { Box } from "@chakra-ui/react";
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
    <Box bg={"#216869"}>
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
    </Box>
  );
}
