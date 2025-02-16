import React, { useEffect, useMemo, useState } from "react";
import Friend from "./Friend";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../../features/authActions";
export default function Friendlist() {
  const dispatch = useDispatch();
  const [friends, setFriends] = useState([]);
  const { userToken } = useSelector((state) => state.auth);
  const { loading, user, error } = useSelector((state) => state.auth);

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
  return (
    <>
      <Heading fontSize={"3xl"} background={"green.300"} padding="3">
        Join your friends
      </Heading>
      <Flex flex="1" width="full" direction={"column"}>
        <Box height="full" background={"red.300"}>
          {memoizedFriends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </Box>
      </Flex>
    </>
  );
}
