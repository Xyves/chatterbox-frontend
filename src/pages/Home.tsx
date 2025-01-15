import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import "../index.css";
export default function Home() {
  return (
    <Box
      className=" "
      height={"2xl"}
      backgroundColor={"#497592"} /* OR #131415  */
    >
      {}
      <Flex justifyContent={"center"} alignItems={"flex-end"} height={"full"}>
        <Box
          marginY={"auto"}
          flexDirection={"column"}
          alignContent={"center"}
          className="flex items-center justify-center "
          height={"full"}
          width={"1/3"}
        >
          <Heading size="5xl" marginBottom={"4"}>
            Chat App
          </Heading>
          <Heading size="lg" paddingTop={"2"}>
            {" "}
            When you are a perfectionist and it's boring to be like everyone
            else
          </Heading>
          <h2 className="p-12  text-2xl"></h2>
          <Button fontWeight={"bold"} marginY="5">
            get started
          </Button>
        </Box>
        <Box
          className="w-96"
          height={"full"}
          marginY={"auto"}
          alignContent={"center"}
        >
          <img
            src="/images/chat-vector-removebg.png"
            className="w-full h-full"
          />
        </Box>
      </Flex>
    </Box>
  );
}
