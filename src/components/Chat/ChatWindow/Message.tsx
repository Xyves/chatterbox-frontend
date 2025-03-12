import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { useSelector } from "react-redux";
import moment from "moment";
import { RootState } from "../../../app/store";
import { useAppSelector } from "../../../app/hooks";
import { useColorMode } from "../../ui/color-mode";

moment().format();
export default function Message({
  message,
  selectedFriend,
}: {
  message: object;
  selectedFriend: object;
}) {
  const { colorMode } = useColorMode();
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { sender_id, content, time, id } = message;
  const currentTime = moment.unix(time).format("HH:mm YYYY-MM-DD");
  const color = colorMode === "light" ? "white" : "white";
  return (
    <Box
      gap="4"
      key={message.id}
      paddingX="8"
      marginBottom={"4"}
      marginLeft={message.sender_id != user.id ? "" : "auto"}
      width="2xl"
      color={color}
      marginRight={"10"}
    >
      <Flex
        alignItems="center"
        justifyContent={"center"}
        flexDirection={message.sender_id !== user.id ? "row" : "row-reverse"}
        gap={4}
        width="full"
      >
        <Avatar
          boxSize={"10"}
          // marginTop="12"
          src={
            message.sender_id != user.id
              ? selectedFriend.avatar_url
                ? selectedFriend.avatar_url
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              : user
              ? user.avatar_url
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }
        />
        <Box padding="3" width={"10/12"}>
          <Heading>
            <Text fontWeight={"bolder"}>
              {sender_id === user.id ? user.nickname : selectedFriend.nickname}
            </Text>
            <Text fontSize={"x-small"}>{currentTime}</Text>
          </Heading>
          <Heading
            size="md"
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
