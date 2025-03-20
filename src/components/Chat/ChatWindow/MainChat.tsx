import { Box, Stack } from "@chakra-ui/react";
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
    <Stack direction={{ base: "row", md: "column" }} align="center">
      <Box
        background={bg}
        padding="2"
        width={["md", "lg", "3xl"]}
        height={["sm", "md", "2xl", "3xl"]}
        display="flex"
        flexDirection="column"
      >
        <User user={selectedFriend} />
        <Box flex="1" overflowY="auto" overflowX={"hidden"}>
          <MessageList selectedFriend={selectedFriend} />
        </Box>
        <Box width="full " padding="6">
          <ChatInput />
        </Box>
      </Box>
    </Stack>
  );
}
