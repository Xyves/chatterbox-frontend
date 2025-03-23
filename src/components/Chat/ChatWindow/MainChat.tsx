import { Box, Flex, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import User from "./User";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
//@ts-ignore
import { fetchMessages } from "../../../features/chatActions";
import { useColorMode } from "../../ui/color-mode";
import { UserData } from "../../../types";

export default function MainChat({
  selectedFriend,
}: {
  selectedFriend: UserData;
}) {
  const { colorMode } = useColorMode();
  const { id: chat_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages(chat_id));
  }, [dispatch, chat_id]);
  const bg = colorMode === "light" ? "#2B9EB3" : "#154D57";
  return (
    <Flex>
      <Box
        padding="2"
        height="full"
        display="flex"
        minWidth={"full"}
        flexDirection="column"
      >
        <User user={selectedFriend} />
        <Flex flexDirection="column" height="80vh">
          <Box flex="1" overflowY="auto" overflowX="hidden">
            <MessageList selectedFriend={selectedFriend} />
          </Box>
          <Box width="full" bg={bg} flexShrink={0}>
            <ChatInput />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
