import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "../../ui/avatar";
import { useSelector } from "react-redux";

export default function MessageList({ messages }) {
  const { loading, user, error } = useSelector((state) => state.auth);
  if (messages) return "No messages yet";
  return (
    <Box>
      <Box
        bg="pink"
        width="full"
        display="flex"
        gap="5"
        paddingX="8"
        marginBottom={"4"}
      >
        <Avatar
          boxSize={"20"}
          // size="2xl"
          display="flex"
          src={
            user
              ? user.avatar_url
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }
        />
        <Box display="inline">
          <Heading size="lg">{user.nickname} January 10, 2023 16:23</Heading>
          <Text>no way!</Text>
        </Box>
      </Box>
    </Box>
  );
}
