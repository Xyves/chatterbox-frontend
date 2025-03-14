import "primeicons/primeicons.css";

import { Box, Button, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "../ui/menu";
//@ts-ignore
import { logout } from "../../features/authSlice";
import { useColorMode } from "../ui/color-mode";

import { Avatar } from "../ui/avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";

export default function Navbar() {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { toggleColorMode, colorMode } = useColorMode();
  const dispatch = useDispatch();

  return (
    <nav className={"w-full text-red-700"}>
      <Box
        background={colorMode === "light" ? "#55c2da" : "#2C4251"}
        backgroundImage={"/images/gradient-fire.png"}
        color="red.800"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Icon size={"2xl"} marginLeft="6">
            <Link to="/">
              <img src="/images/curse_logo.png" alt="" className="" />
            </Link>
          </Icon>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} /*spacing={7}*/>
              <Box alignSelf={"center"} color="red.800" textDecoration="red">
                <Button
                  background={
                    colorMode === "light" ? "whiteAlpha.900" : "#2C4251"
                  }
                  rounded="3xl"
                >
                  <Link to={user ? "/chat" : "/login"} className="">
                    <Text
                      fontWeight={"bold"}
                      color={colorMode === "light" ? "#f4a261" : "gray.200"}
                    >
                      Chat
                    </Text>
                  </Link>
                </Button>
              </Box>
              <Button
                onClick={toggleColorMode}
                fontWeight={"bold"}
                background={
                  colorMode === "light" ? "whiteAlpha.900" : "#2C4251"
                }
                color={colorMode === "light" ? "#f4a261" : "gray.200"}
                rounded="3xl"
              >
                {colorMode === "light" ? (
                  <i className="pi pi-sun" style={{ fontSize: "1rem" }} />
                ) : (
                  <i className="pi pi-moon" style={{ fontSize: "1rem" }} />
                )}
              </Button>
              <MenuRoot>
                <MenuTrigger marginLeft="16" asChild>
                  <Button as={Button} rounded="full" background={"none"}>
                    <Avatar
                      size={"md"}
                      border={"green"}
                      borderBlockWidth={"2"}
                      borderStyle={"double"}
                      src={
                        user
                          ? user.avatar_url
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                      }
                    />
                  </Button>
                </MenuTrigger>
                <VStack align="center" marginX={"8"} display={"flex"}></VStack>
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
                      <Link to="/settings">Account Settings</Link>
                    </MenuItem>
                    {!user ? (
                      <MenuItem value="login">
                        <Link to="/login">Login</Link>
                      </MenuItem>
                    ) : (
                      <MenuItem value="Logout">
                        <button onClick={() => dispatch(logout())}>
                          <Link to="/logout">Logout</Link>
                        </button>
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
