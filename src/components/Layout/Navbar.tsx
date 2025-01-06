import "primeicons/primeicons.css";

import {
  Box,
  Button,
  Flex,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "../ui/menu";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

import { Avatar } from "../ui/avatar";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(colorMode);
  return (
    <nav className="w-full ">
      <Box background={"green.500"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}> */}
              {/* <button className="p-32"> */}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <i className="pi pi-moon" style={{ fontSize: "1.5rem" }} />
                ) : (
                  <i className="pi pi-sun" style={{ fontSize: "1.5rem" }} />
                )}
              </Button>
              <Box>Chat</Box>
              <MenuRoot>
                <MenuTrigger asChild>
                  <Button as={Button} rounded="full" variant="link">
                    <Avatar
                      size={"md"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Button>
                </MenuTrigger>
                <VStack align="center" spacing={3} p={4}></VStack>
                <MenuContent>
                  <MenuItemGroup>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                    <p>Username</p>

                    <MenuSeparator />

                    <MenuItem value="Account Settings">
                      <a href="/profile/settings">Account Settings</a>
                    </MenuItem>
                    <MenuItem value="Logout">
                      <a href="/logout">Logout</a>
                    </MenuItem>
                  </MenuItemGroup>
                </MenuContent>
              </MenuRoot>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {/* <ul>
        <li>Home</li>
        <li>Chat</li>
        <li>Profile</li>
        <li>Login / Register</li>
      </ul> */}
    </nav>
  );
}
