import Friend from "./Friend";
import { Box, Flex, Text } from "@chakra-ui/react";
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
  const bg = colorMode === "light" ? "#95d8e5" : "#345363";
  return (
    <Box marginBottom={"16"} bg={bg}>
      <Flex flex="1" width="full" direction={"column"}>
        <Text
          fontSize={{ sm: "lg", md: "xl", lg: "2xl" }}
          fontWeight={"bold"}
          color={colorMode === "light" ? "black" : "white"}
          marginLeft="4"
          padding="3"
          marginY={"3"}
        >
          Join Your Friends
        </Text>
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
