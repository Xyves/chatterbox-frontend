import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";

import moment from "moment";
import { useAppSelector } from "../../../app/hooks";
import { useColorMode } from "../../ui/color-mode";
import { AuthState, MessageInterface, UserData } from "../../../types";
import { redirect } from "react-router";

moment().format();
export default function Message({
  message,
  selectedFriend,
}: {
  message: MessageInterface;
  selectedFriend: UserData;
}) {
  const { colorMode } = useColorMode();
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);
  const { sender_id, content, time } = message;
  const currentTime = moment.unix(Number(time)).format("HH:mm YYYY-MM-DD");
  const color = colorMode === "light" ? "white" : "white";
  if (user === null) {
    redirect("/login");
  }
  return (
    <Box
      gap="4"
      key={message.id}
      paddingX="6"
      marginBottom={"3"}
      marginLeft={message.sender_id != user?.id ? "" : "auto"}
      color={color}
      marginRight={"10"}
    >
      <Flex
        alignItems="center"
        justifyContent={"center"}
        flexDirection={message.sender_id !== user?.id ? "row" : "row-reverse"}
        gap={4}
        width="full"
      >
        <Avatar
          boxSize={["6", "10", "14"]}
          marginTop="6"
          src={
            message.sender_id !== user?.id
              ? selectedFriend?.avatar_url ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              : user?.avatar_url ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }
        />
        <Box padding="3" width={"full"}>
          <Heading>
            <Text>
              <span className="font-bold">
                {user === null
                  ? null
                  : sender_id === user.id
                  ? user.nickname
                  : selectedFriend.nickname}
              </span>
              &nbsp;
              <Text display="inline-block"></Text>
              <span className="font-normal text-sm">{currentTime}</span>
            </Text>
          </Heading>
          <Heading
            fontSize="md"
            background={"white"}
            color="black"
            padding="2"
            rounded="xl"
          >
            {content}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
