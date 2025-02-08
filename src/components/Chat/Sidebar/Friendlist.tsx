import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import { Box, Card, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
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
          const response = await dispatch(fetchFriends(user.id));
          setFriends(response.payload);
          console.log("friendlist:", response.payload);
        } catch (error) {
          console.error("Error fetching friends:", error);
        }
      }
    };

    getFriends();
  }, [dispatch, userToken]);

  return (
    <>
      <Heading fontSize={"3xl"} background={"green.300"} padding="3">
        Join your friends
      </Heading>
      <Flex flex="1" width="full" direction={"column"}>
        <Box height="full" background={"red.300"}>
          {friends.map((friend) => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </Box>
      </Flex>
    </>
  );
}
