import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import User from "./User";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
//@ts-ignore
import { fetchMessages } from "../../../features/chatActions";
import { useColorMode } from "../../ui/color-mode";
import { RootState } from "../../../app/store";

export default function MainChat({
  setMessages,
  selectedFriend,
}: {
  setMessages: any;
  selectedFriend: object;
}) {
  const { colorMode } = useColorMode();
  const { id: chat_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages(chat_id));
  }, [dispatch, chat_id]);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const bg = colorMode === "light" ? "#2B9EB3" : "#154D57";

  return (
    <Box
      background={bg}
      padding="2"
      height="3xl"
      display="flex"
      flexDirection="column"
    >
      <User user={selectedFriend} />
      <Box flex="1" overflow="auto">
        <MessageList selectedFriend={selectedFriend} />
      </Box>
      <Box width="full " padding="6">
        <ChatInput setMessages={setMessages} messages={messages} />
      </Box>
    </Box>
  );
}
