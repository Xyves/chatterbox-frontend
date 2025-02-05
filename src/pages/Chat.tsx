import {
  AvatarIcon,
  AvatarImage,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import Friendlist from "../components/Chat/Friendlist";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/authActions";
import { Spinner } from "@chakra-ui/react";
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
            <Avatar
              marginX="auto"
              size="2xl"
              src={
                user.avatar_url
                  ? user.avatar_url
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
              }
            ></Avatar>
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
            <Box>
              {/* Friend info */}
              <Flex>
                <Box>
                  <Box>{/* Avatar + Name */}</Box>
                  <Box>{/* Search + Call */}</Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              {/* Chat log list*/}
              <Flex>
                <Box>
                  {/* Message */}
                  <AvatarImage></AvatarImage>
                  <Heading size="lg">uwotm8 January 10, 2023 16:23</Heading>
                  <Text>no way!</Text>
                </Box>
              </Flex>
            </Box>
            <Box>{/* Chat input */}</Box>
          </Grid>
        </Box>
        <Box>
          <Flex direction={"row"}>
            <AvatarIcon></AvatarIcon>
            <Text>{user.bio}</Text>
            <Text>{user.avatar_url}</Text>
          </Flex>
        </Box>
      </Box>
      {/* </Box> */}
    </Grid>
  );
}
