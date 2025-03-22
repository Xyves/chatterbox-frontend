import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import "../index.css";
import { useColorMode } from "../components/ui/color-mode";
import { Link } from "react-router";
export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box
      height={"100vh"}
      background={colorMode === "light" ? "#f1faee" : "#242424"}

      // backgroundColor={"#497595"}
      /* OR #131415  */
    >
      <Flex justifyContent={"center"} alignItems={"center"} height={"full"}>
        <Stack
          direction={{ base: "column", md: "row" }} // Column on small screens, row on medium and above
          align="center" // Centers items horizontally
          justify="center"
        >
          <Box
            marginY={"auto"}
            flexDirection={"column"}
            alignContent={"center"}
            className="flex items-center justify-center "
            height={"full"}
            width={"1/2"}
            fontSize={["md", "md", "lg", "xl"]}
            marginLeft="10"
          >
            <Heading
              fontSize={["3xl", "3xl", "5xl"]}
              marginBottom={"4"}
              color={colorMode === "light" ? "#21262b" : "#F1F2EE"}
            >
              Chat App
            </Heading>
            <Heading
              fontSize={["md", "md", "lg", "xl"]}
              paddingTop={"2"}
              color={colorMode === "light" ? "#2d353d" : "#c6c7c3"}
            >
              When you are a perfectionist and it's boring to be like everyone
              else...
            </Heading>
            <h2 className="p-12  text-2xl"></h2>
            <Link to="/login">
              <Button
                marginY="5"
                paddingY="5"
                background={colorMode === "light" ? " #90e0ef" : "#407476"}
                rounded="md"
                color={colorMode === "light" ? "#2d353d" : "whiteAlpha.900"}
              >
                get started
              </Button>
            </Link>
          </Box>
          <Box
            className="w-96"
            width={["sm", "md", "2xl"]}
            height={"full"}
            marginY={"auto"}
            alignContent={"center"}
          >
            <img
              src="/images/chat-vector-removebg.png"
              className="w-full h-full"
            />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
