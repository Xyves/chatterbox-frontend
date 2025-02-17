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

import Friendlist from "../components/Chat/Sidebar/Friendlist";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/authActions";
import Loading from "../components/Loading";
import { fetchMessages } from "../features/authActions";

import UserInfo from "../components/Chat/Sidebar/UserInfo";
import MainChat from "../components/Chat/ChatWindow/MainChat";
import { useParams } from "react-router";
import { fetchFriends } from "../features/authActions";
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.auth);
  const { userToken } = useSelector((state) => state.auth);
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  useEffect(() => {
    if (userToken) {
      dispatch(fetchUser());
    }
  }, [dispatch, userToken]);
  useEffect(() => {
    if (id) {
      dispatch(fetchMessages(id))
        .unwrap()
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
    }
  }, [id, dispatch, user.id]);
  useEffect(() => {
    const getFriends = async () => {
      if (userToken) {
        try {
          console.log("The user while fetching friends:", user.nickname);
          const response = await dispatch(fetchFriends(user.nickname));
          setFriends(response.payload);
          console.log("friendlist:", response.payload);
        } catch (error) {
          console.error("Error fetching friends:", error);
        }
      }
    };

    getFriends();
  }, []);
  const memoizedFriends = useMemo(() => friends, [friends]);
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
        <Friendlist
          friends={memoizedFriends}
          onSelectFriend={setSelectedFriend}
        />
      </Box>
      <Box
        gridColumnStart="3"
        background="#020887"
        gridColumnEnd="12"
        rounded="2xl"
        height="11/12"
      >
        {id ? (
          <MainChat
            messages={messages}
            setMessages={setMessages}
            selectedFriend={selectedFriend}
          />
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
}
