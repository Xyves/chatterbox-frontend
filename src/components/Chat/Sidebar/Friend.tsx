import { Card, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "../../ui/avatar";

export default function Friend({ friend }) {
  return (
    <Card.Root
      background={"purple.300"}
      marginBottom="4"
      rounded="2xl"
      margin="2"
      height={"20"}
      display="flex"
      justifyContent={"center"}
      _last={{ marginBottom: "10" }}
    >
      <Card.Body>
        <HStack gap="3">
          <Avatar
            src={
              friend.avatar_url
                ? friend.avatar_url
                : "https://images.unsplash.com/photo-1511806754518-53bada35f930"
            }
            name={`avatar of ${friend.avatar_url ? friend.avatar_url : "user"}`}
            boxSize={"14"}
          />
          <Stack gap="">
            <Heading fontWeight="semibold" textStyle="1xl">
              {friend.nickname}
            </Heading>
          </Stack>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
