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
import Friendlist from "../components/Chat/Sidebar/Friendlist";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/authActions";
import { Avatar } from "../components/ui/avatar";
import Loading from "../components/Loading";
import User from "../components/Chat/ChatWindow/User";
import MessageList from "../components/Chat/ChatWindow/MessageList";
import UserInfo from "../components/Chat/Sidebar/UserInfo";
import ChatInput from "../components/Chat/ChatWindow/ChatInput";

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
        overflowY="auto"
        height="auto"
        gridColumnStart="1"
        gridColumnEnd="2"
        background={"yellow.400"}
      >
        <UserInfo user={user} />
        <Friendlist />
      </Box>
      <Box
        gridColumnStart="3"
        background="red.200"
        gridColumnEnd="12"
        rounded="2xl"
        height="11/12"
      >
        <Box
          margin="16"
          background="green.600"
          height="2xl"
          display="flex"
          flexDirection="column"
        >
          <User user={user} />
          <Box flex="1" overflow="auto">
            <MessageList user={user} />
            <MessageList user={user} />
          </Box>
          <Box width="full " padding="6">
            <ChatInput />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
