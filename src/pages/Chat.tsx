import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import "primeicons/primeicons.css";

import Friendlist from "../components/Chat/Sidebar/Friendlist";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
//@ts-ignore
import { fetchUser } from "../features/authActions";
import Loading from "../components/Loading";

import UserInfo from "../components/Chat/Sidebar/UserInfo";
import MainChat from "../components/Chat/ChatWindow/MainChat";
import { useParams } from "react-router";
//@ts-ignore
import { fetchFriends } from "../features/authActions";
import { useColorMode } from "../components/ui/color-mode";
import { useAppSelector } from "../app/hooks";
import { AuthState, UserData } from "../types";
export default function Chat() {
  const { colorMode } = useColorMode();

  const bg = colorMode === "light" ? "#ebebea" : "#2C4251";
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user, userToken } = useAppSelector(
    (state: { auth: AuthState }) => state.auth
  );
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState<UserData>({
    id: "",
    nickname: "Guest",
  });

  useEffect(() => {
    if (userToken) {
      dispatch(fetchUser());
    }
  }, [dispatch, userToken]);

  useEffect(() => {
    const getFriends = async () => {
      if (userToken) {
        if (user) {
          try {
            console.log("The user while fetching friends:", user.nickname);
            const response = await dispatch(fetchFriends(user.nickname));
            setFriends(response.payload);
            console.log("friendlist:", response.payload);
          } catch (error) {
            console.error("Error fetching friends:", error);
          }
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
    <Flex smToMd={{ flexDirection: "row-reverse" }}>
      <Grid
        templateColumns="repeat(14, 1fr)"
        templateRows="repeat(6, 1fr)"
        width="full"
        minH="100vh"
      >
        <GridItem
          background={bg}
          colSpan={3}
          rowSpan={2}
          overflowY="auto"
          h="100vh"
          maxWidth={"80"}
          flexShrink={1}
          hideBelow="md"
        >
          {user ? <UserInfo user={user} /> : null}
          <Friendlist
            friends={memoizedFriends}
            onSelectFriend={setSelectedFriend}
          />
        </GridItem>
        {/* </Box> */}
        <GridItem
          gridColumnStart={5}
          mdDown={{ gridColumnStart: 2, gridColumnEnd: 14 }}
          gridColumnEnd={14}
          rowSpan={4}
          // TODO: Fix below line
          height={["30vh", "30vh", "60vh"]}
          display="flex"
          flexDirection="column"
          padding="5"
          fontSize={["sm", "md", "lg"]}
        >
          {id ? <MainChat selectedFriend={selectedFriend} /> : null}
        </GridItem>
      </Grid>
    </Flex>
  );
}
