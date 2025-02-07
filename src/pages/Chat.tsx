import {
  AvatarIcon,
  AvatarImage,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import "primeicons/primeicons.css";

import { Card } from "@chakra-ui/react";
import Friendlist from "../components/Chat/Friendlist";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/authActions";
import { Avatar } from "../components/ui/avatar";
import Loading from "../components/Loading";

export default function Chat() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.auth);
  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUser());
    }
  }, [dispatch, userToken]);

  if (loading) {
    <Loading />;
  }
  return (
    <Grid templateColumns={"12"} height={"88vh"} width="full">
      <Box
        height="auto"
        gridColumnStart="1"
        gridColumnEnd="2"
        background={"yellow.400"}
      >
        <Card.Root>
          <Card.Header />
          <Card.Body>
            {/* <Avatar
              marginX="auto"
              size="2xl"
              src={
                user.avatar_url
                  ? user.avatar_url
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
            ></Avatar> */}
          </Card.Body>
          <Card.Title
            textAlign={"center"}
            fontWeight={"bolder"}
            fontSize="lg"
            marginBottom="6"
          >
            {user.nickname}
            {/* nickname */}
          </Card.Title>
        </Card.Root>
        <Friendlist />
      </Box>
      <Box
        gridColumnStart={"3"}
        background={"red.200"}
        height="full"
        gridColumnEnd="12"
      >
        <Box margin="16" background="green.600" height="2xl">
          <Grid>
            <Box
              bg="blue.200"
              height="40"
              borderTop="0"
              borderBottom={"6"}
              border={"yellow"}
              borderBlock={"solid"}
            >
              {/* Friend info */}
              <Box padding="6" width="full">
                <Flex alignItems={"center"}>
                  <Box>
                    <Avatar
                      boxSize={"28"}
                      src={
                        user
                          ? user.avatar_url
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                      }
                    />
                    <Heading
                      display="inline-block"
                      marginLeft={"5"}
                      marginTop="2"
                    >
                      {user.nickname.charAt(0).toUpperCase() +
                        String(user.nickname).slice(1)}
                    </Heading>
                  </Box>
                  <Box
                    marginLeft="auto"
                    marginRight={"12"}
                    display="flex"
                    justifyContent={"space-between"}
                  >
                    <i
                      className="pi pi-search w-full h-full "
                      style={{ fontSize: "5rem", color: "orange" }}
                    ></i>
                    <i
                      className="pi pi-phone w-full h-full "
                      style={{ fontSize: "5rem", color: "green" }}
                    ></i>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box>
              {/* Chat log list*/}
              <Box
                bg="pink"
                width="full"
                display="flex"
                gap="5"
                paddingX="8"
                marginBottom={"4"}
              >
                <Avatar
                  boxSize={"20"}
                  // size="2xl"
                  display="flex"
                  src={
                    user
                      ? user.avatar_url
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                  }
                />
                <Box display="inline">
                  <Heading size="lg">
                    {user.nickname} January 10, 2023 16:23
                  </Heading>
                  <Text>no way!</Text>
                </Box>
              </Box>
              <Box bg="pink" width="full" display="flex" gap="5">
                <Avatar
                  boxSize={"14"}
                  // size="2xl"
                  display="flex"
                  src={
                    user
                      ? user.avatar_url
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                  }
                />
                <Box display="inline">
                  <Heading size="lg">
                    {user.nickname} January 10, 2023 16:23
                  </Heading>
                  <Text>no way!</Text>
                </Box>
              </Box>
            </Box>
            <Box>{/* Chat input */}</Box>
          </Grid>
        </Box>
        <Box>
          <Flex direction={"row"}>
            {/* <AvatarIcon></AvatarIcon> */}
            <Text>{user.bio}</Text>
            <Text>{user.avatar_url}</Text>
          </Flex>
        </Box>
      </Box>
      {/* </Box> */}
    </Grid>
  );
}
