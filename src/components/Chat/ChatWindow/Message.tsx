import { Box, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import React from "react";

export default function Message({ sender_id, content, time, id }) {
  return (
    <Box
      bg="pink"
      width="full"
      display="flex"
      gap="5"
      paddingX="8"
      marginBottom={"4"}
    >
      {/* <Avatar
        boxSize={"20"}
        // size="2xl"
        display="flex"
        src={
          user
            ? user.avatar_url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        }
      /> */}
      <Box display="inline">
        <Heading size="lg">
          {sender_id} - {time}
        </Heading>
        <Text>
          {content}, {id}
        </Text>
      </Box>
    </Box>
  );
}
