import "primeicons/primeicons.css";

import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";

import {
  MenuContent,
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
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AuthState } from "../../types";

export default function Navbar({
  onOpenFriendList,
}: {
  onOpenFriendList: () => void;
}) {
  const { toggleColorMode, colorMode } = useColorMode();
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);
  const bg = colorMode === "light" ? "white" : "#153c5c";
  const hoverBg = colorMode === "light" ? "gray.300" : "#215d8f";
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    handleLogout();

    navigate("/login");
  };
  return (
    <nav className={"w-full text-red-700"}>
      <Box background={colorMode === "light" ? "#55c2da" : "#154d57"}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          width="full"
        >
          <Link to="/">
            <Image
              marginLeft={["1", "6"]}
              src={"/images/HomeLogo-black.png"}
              height={["8", "10"]}
              width={{ mdDown: "30", md: "40", lg: "52" }}
            />
          </Link>
          <Stack direction={"row"} marginLeft="auto">
            <Box color="red.800" textDecoration="red">
              <Button
                background={bg}
                _hover={{ bg: hoverBg }}
                rounded="3xl"
                size={["md", "md", "lg"]}
                fontSize={["xs", "lg"]}
              >
                <Link to={user ? "/chat" : "/login"} className="">
                  <Text fontWeight={"bold"} color={"#f4a261"}>
                    Chat
                  </Text>
                </Link>
              </Button>
            </Box>
            <Button
              onClick={toggleColorMode}
              fontWeight={"bold"}
              background={bg}
              _hover={{ bg: hoverBg }}
              color={"#f4a261"}
              rounded="3xl"
              aria-label="switch theme"
              size={["md", "md", "lg"]}
              fontSize={["2xs", "lg"]}
            >
              {colorMode === "light" ? (
                <i className="pi pi-sun" style={{ fontSize: "1rem" }} />
              ) : (
                <i className="pi pi-moon" style={{ fontSize: "1rem" }} />
              )}
            </Button>
            <MenuRoot>
              <MenuTrigger
                marginLeft={["2", "8", "12", "16"]}
                asChild
                marginRight={[0, 12]}
                padding={["1", "2", "3"]}
              >
                <Button
                  as={Button}
                  rounded="full"
                  background={"none"}
                  aria-label="profile"
                >
                  <Avatar
                    size={["md", "md", "lg"]}
                    fontSize={["xs", "lg"]}
                    borderBlockWidth={"2"}
                    _hover={{ bg: "gray.400" }}
                    borderStyle={"double"}
                    src={
                      user
                        ? user.avatar_url
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    }
                  />
                </Button>
              </MenuTrigger>
              <MenuContent padding="0">
                <MenuItemGroup
                  padding="2"
                  display="flex"
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Avatar
                    size={"2xl"}
                    src={
                      user
                        ? user.avatar_url
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    }
                  />
                  <Text fontSize={"xl"} fontWeight={"bold"} marginTop="2">
                    {user ? user.nickname : ""}
                  </Text>
                  <MenuSeparator marginTop={"3"} />
                  {user ? (
                    <Link to="/settings" className="cursor-pointer">
                      <Button
                        value="Account Settings"
                        fontWeight={"bold"}
                        _hover={{ bg: "blue.400" }}
                        marginBottom={"1"}
                        bg="blue.600"
                        color={colorMode === "light" ? "white" : "gray.200"}
                      >
                        Account Settings
                      </Button>
                    </Link>
                  ) : (
                    ""
                  )}

                  {!user ? (
                    <Box width="full">
                      <Link to="/login">
                        <Button
                          value="login"
                          width="full"
                          bg="green.700"
                          _hover={{ bg: "green.550" }}
                          color={colorMode === "light" ? "white" : "gray.200"}
                        >
                          Login
                          <CiLogin />
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Link to="/login">
                      <Button
                        onClick={handleRedirect}
                        color={colorMode === "light" ? "white" : "gray.200"}
                        className="cursor-pointer"
                        fontWeight={"bold"}
                        width="auto"
                        paddingX={"9"}
                        bg="red.600"
                        _hover={{ bg: "red.500" }}
                      >
                        Log Out
                        <CiLogout />
                      </Button>
                    </Link>
                  )}
                </MenuItemGroup>
              </MenuContent>
            </MenuRoot>
            {user ? (
              <Button
                display={{ sm: "flex", md: "none" }}
                fontSize={"lg"}
                background={colorMode === "light" ? "white" : "black"}
                color={colorMode !== "light" ? "whiteAlpha.800" : "black"}
                border={"solid black 1px"}
                _hover={{ bg: "gray.200" }}
                rounded="3xl"
                padding="1"
                marginRight={["4", "8", "6"]}
                onClick={onOpenFriendList}
              >
                <FaUserFriends className="text-center" />
              </Button>
            ) : (
              ""
            )}
          </Stack>
        </Flex>
      </Box>
    </nav>
  );
}
