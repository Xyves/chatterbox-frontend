import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Box width="full" height="auto" my="64">
      <Flex justifyContent={"center"} marginX="auto" alignContent={"center"}>
        <Heading>Loading:</Heading>
        <Spinner display="block" size="lg"></Spinner>
      </Flex>
    </Box>
  );
}
