import Friend from "./Friend";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
import { UserData } from "../../../types";
export default function Friendlist({
  friends,
  onSelectFriend,
}: {
  friends: UserData[];
  onSelectFriend: any;
}) {
  const { colorMode } = useColorMode();
  return (
    <Box height={"full"}>
      <Heading padding="3" color={colorMode === "light" ? "black" : "white"}>
        Join your friends
      </Heading>
      <Flex flex="1" width="full" direction={"column"}>
        <Box height="full">
          {friends.map((friend: UserData) => (
            <Friend
              friend={friend}
              key={friend.id}
              onSelectFriend={onSelectFriend}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
