import "primeicons/primeicons.css";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Stack,
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
import { logout } from "../../features/authSlice";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

import { Avatar } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

export default function Navbar() {
  const { loading, user, error } = useSelector((state) => state.auth);
  console.log("user is:", user);
  const { toggleColorMode, colorMode } = useColorMode();
  const dispatch = useDispatch();

  return (
    <nav className={`-w-full `}>
      <Box background={"#DCF763"} backgroundImage={"/images/gradient-fire.png"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Icon size={"2xl"} marginLeft="6">
            <Link to="/">
              <img src="/images/curse_logo.png" alt="" className="" />
            </Link>
          </Icon>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box alignSelf={"center"}>
                <Link to="/chat">Chat</Link>
              </Box>
              <Button
                onClick={toggleColorMode}
                background={colorMode === "light" ? "gray.400" : "gray.800"}
                color={colorMode === "light" ? "black" : "gray.400"}
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
                  <Button
                    as={Button}
                    rounded="full"
                    variant="link"
                    background={"none"}
                  >
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
                      <Link to="/profile/settings">Account Settings</Link>
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
