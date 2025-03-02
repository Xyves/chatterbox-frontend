import React, { useEffect, useMemo, useState } from "react";
import Friend from "./Friend";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../../features/authActions";
export default function Friendlist({ friends, onSelectFriend }) {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const { loading, user, error } = useSelector((state) => state.auth);

  return (
    <>
      <Heading fontSize={"3xl"} padding="3">
        Join your friends
      </Heading>
      <Flex flex="1" width="full" direction={"column"}>
        <Box height="full">
          {friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              onSelectFriend={onSelectFriend}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
}
