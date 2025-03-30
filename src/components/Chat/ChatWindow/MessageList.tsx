import { Box, Flex } from "@chakra-ui/react";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import Message from "./Message";
import { MessageInterface, UserData } from "../../../types";
import { useColorMode } from "../../ui/color-mode";

export default function MessageList({
  selectedFriend,
}: {
  selectedFriend: UserData;
}) {
  const messages = useSelector((state: RootState) => state.messages.messages);
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "#3ec8c9" : "#12324d";
  return (
    <Box
      bg={bg}
      paddingTop="10"
      paddingBottom={"5"}
      minWidth="full"
      minH="100%"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
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
          alignItems="flex-start"
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
