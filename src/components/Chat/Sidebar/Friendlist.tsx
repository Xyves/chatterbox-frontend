import Friend from "./Friend";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
export default function Friendlist({ friends, onSelectFriend }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading
        fontSize={"3xl"}
        padding="3"
        color={colorMode === "light" ? "black" : "white"}
      >
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
