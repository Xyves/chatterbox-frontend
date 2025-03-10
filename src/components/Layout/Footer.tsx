import { Stack, Link, Text } from "@chakra-ui/react";
import "primeicons/primeicons.css";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

export default function Footer() {
  const { colorMode } = useColorMode();

  const bg = colorMode === "light" ? "#55c2da" : "#2C4251";
  return (
    <Stack
      bg={bg}
      position="fixed"
      bottom="0"
      padding="0.5"
      width={"full"}
      fontSize="md"
    >
      <Stack direction="row" align="center" justifyContent={"center"}>
        <Text color={colorMode === "light" ? "gray.900" : "gray.50"}>
          Github:
        </Text>
        <i
          className={`pi pi-github text-center `}
          style={{
            color: colorMode === "light" ? "#435058" : "white",
          }}
        ></i>
        <Link
          href="https://github.com/Xyves "
          className="text-center text-red-200 text transition-none text-inherit border-none"
          target="_blank"
        >
          <Text color="blackAlpha.900">Xyves</Text>
        </Link>
      </Stack>
    </Stack>
  );
}
