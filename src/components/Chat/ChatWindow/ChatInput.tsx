import { Box, Button, Input } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";

export default function ChatInput({ setMessages }) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Input
        placeholder="Say something..."
        variant="subtle"
        background={colorMode === "light" ? "whiteAlpha.950" : "blackAlpha.900"}
        color={colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950"}
      />
      <Button bg="blue.500" rounded="xl" marginTop="1ćC">
        Submit Message
      </Button>
    </>
  );
}
