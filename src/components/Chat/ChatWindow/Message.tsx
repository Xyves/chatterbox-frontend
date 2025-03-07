import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { useSelector } from "react-redux";
import moment from "moment";
moment().format();
export default function Message({ message, selectedFriend }) {
  const { loading, user, error } = useSelector((state) => state.auth);
  const { sender_id, content, time, id } = message;
  const currentTime = moment.unix(time).format("HH:mm YYYY-MM-DD");
  return (
    <Box
      display="flex"
      gap="4"
      key={message.id}
      paddingX="8"
      marginBottom={"4"}
      marginLeft={message.sender_id != user.id ? "" : "auto"}
      width="1/2"
      marginRight={"10"}
    >
      <Flex
        alignItems="center"
        flexDirection={message.sender_id !== user.id ? "row" : "row-reverse"}
        alignContent={"center"}
        gap={4}
        width="full"
      >
        <Avatar
          boxSize={"10"}
          marginTop="2"
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
        <Box padding="3" width={"4/5"}>
          <Heading>
            <Text>{sender_id}</Text>
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
