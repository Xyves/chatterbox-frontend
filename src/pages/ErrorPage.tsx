import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <Box marginY="10">
      <Flex justifyContent={"center"} direction={"column"}>
        <Box boxSize={"1/4"} marginX="auto">
          <img
            src={"./images/Scarecrow.png"}
            alt="404-Scarecrow"
            className="size-16 w-4 h-4"
          />
        </Box>
        <Box textAlign={"center"}>
          <Text fontSize={"3xl"} padding="5">
            I have bad news for you
          </Text>
          <Heading marginBottom={"5"}>
            {" "}
            The page you are looking for might be removed or is temporarily
            unavailable
          </Heading>
        </Box>
      </Flex>
      <Flex justifyContent={"center"}>
        <Button className="btn" background={"red.700"}>
          <a href="/" className="no-underline text-black ">
            home
          </a>
        </Button>
      </Flex>
    </Box>
  );
}
