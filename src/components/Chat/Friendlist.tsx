import React from "react";
import Friend from "./Friend";
import { Box, Card, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";

export default function Friendlist() {
  return (
    <>
      <Heading fontSize={"3xl"} background={"green.300"} padding="3">
        Join your friends
      </Heading>
      <Flex flex="1" width="full" direction={"column"}>
        <Box height="full" background={"red.300"}>
          <Friend />
        </Box>
      </Flex>
    </>
  );
}
