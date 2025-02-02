import { Stack, Link, Text } from "@chakra-ui/react";
import "primeicons/primeicons.css";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

export default function Footer() {
  const { toggleColorMode, colorMode } = useColorMode();

  const bg = colorMode === "light" ? "black" : "white";
  return (
    <Stack bg={bg} position="fixed" bottom="0" padding="2" width={"full"}>
      <Stack direction="row" align="center" justifyContent={"center"}>
        <Text color={colorMode === "light" ? "white" : "black"}>Github:</Text>
        <i
          className={`pi pi-github text-center ${
            colorMode === "light" ? "text-black" : "text-white"
          } `}
          style={{ color: colorMode === "light" ? "white" : "black" }}
        ></i>
        <Link
          href="https://github.com/Xyves "
          className="text-center"
          target="_blank"
        >
          Xyves
        </Link>
      </Stack>
    </Stack>
  );
}
