import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import "../index.css";
import { useColorMode } from "../components/ui/color-mode";
import { Link } from "react-router";
export default function Home() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      height={"100vh"}
      background={colorMode === "light" ? "#F1F2EE" : "#435058"}

      // backgroundColor={"#497595"}
      /* OR #131415  */
    >
      <Flex justifyContent={"center"} alignItems={"flex-end"} height={"full"}>
        <Box
          marginY={"auto"}
          flexDirection={"column"}
          alignContent={"center"}
          className="flex items-center justify-center "
          height={"full"}
          width={"1/3"}
        >
          <Heading
            size="5xl"
            marginBottom={"4"}
            color={colorMode === "light" ? "#21262b" : "#F1F2EE"}
          >
            Chat App
          </Heading>
          <Heading
            size="lg"
            paddingTop={"2"}
            color={colorMode === "light" ? "#2d353d" : "#c6c7c3"}
          >
            When you are a perfectionist and it's boring to be like everyone
            else...
          </Heading>
          <h2 className="p-12  text-2xl"></h2>
          <Link to="/login">
            <Button
              fontWeight={"bold"}
              marginY="5"
              background="#4D97AA"
              rounded="md"
              color={colorMode === "light" ? "#2d353d" : "whiteAlpha.900"}
            >
              get started
            </Button>
          </Link>
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
