import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import React from "react";
import { useSelector } from "react-redux";

export default function Message({ message, selectedFriend }) {
  const { loading, user, error } = useSelector((state) => state.auth);

  const { sender_id, content, time, id } = message;
  return (
    <Box
      bg="whiteAlpha.400"
      display="flex"
      gap="5"
      key={message.id}
      paddingX="8"
      marginBottom={"4"}
      marginLeft={message.sender_id != user.id ? "" : "auto"}
      width="1/2"
    >
      <Flex
        alignItems="center"
        flexDirection={message.sender_id !== user.id ? "row" : "row-reverse"}
        gap={12}
      >
        <Avatar
          boxSize={"16"}
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
        <Box display="inline" bg={"yellow.400"}>
          <Heading size="lg">
            {sender_id} - {time}
            {message.id}
          </Heading>
          <Text>
            {content}, {id}
          </Text>
        </Box>{" "}
      </Flex>
    </Box>
  );
}
