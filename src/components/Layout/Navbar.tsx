import "primeicons/primeicons.css";

import { Box, Button, Flex, Icon, Stack, VStack } from "@chakra-ui/react";
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
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const { loading, user, error } = useSelector((state) => state.auth);
  console.log("user is:", user);
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <nav
      className={`-w-full ${
        colorMode === "light" ? "bg-slate-300" : "bg-[#0090C1]"
      }`}
    >
      <Box
        background={colorMode === "light" ? "whiteAlpha.800" : "bg-[#0090C1]"}
        backgroundImage={"/images/gradient-fire.png"}
        borderBottomColor={"white"}
        borderBottomWidth={"1.5px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Icon size={"2xl"} marginLeft="6">
            <a href="/">
              <img src="/images/curse_logo.png" alt="" className="" />
            </a>
          </Icon>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box alignSelf={"center"}>
                <a href="/chat">Chat</a>
              </Box>
              {/* TODO: FIX toggleColor */}
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <i className="pi pi-moon" style={{ fontSize: "1.5rem" }} />
                ) : (
                  <i className="pi pi-sun" style={{ fontSize: "1.5rem" }} />
                )}
              </Button>
              <MenuRoot>
                <MenuTrigger marginLeft="16" asChild>
                  <Button as={Button} rounded="full" variant="link">
                    <Avatar
                      size={"md"}
                      src={
                        user
                          ? user.avatar_url
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                      }
                    />
                  </Button>
                </MenuTrigger>
                <VStack
                  align="center"
                  spacing={3}
                  marginX={"8"}
                  display={"flex"}
                ></VStack>
                <MenuContent>
                  <MenuItemGroup>
                    <Avatar
                      size={"2xl"}
                      src={
                        user
                          ? user.avatar_url
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                      }
                    />
                    <p>{user ? user.nickname : ""}</p>
                    <MenuSeparator />
                    <MenuItem value="Account Settings">
                      <a href="/profile/settings">Account Settings</a>
                    </MenuItem>
                    {!user ? (
                      <MenuItem value="login">
                        <a href="/login">Login</a>
                      </MenuItem>
                    ) : (
                      <MenuItem value="Logout">
                        <a href="/logout">Logout</a>
                      </MenuItem>
                    )}
                  </MenuItemGroup>
                </MenuContent>
              </MenuRoot>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}
