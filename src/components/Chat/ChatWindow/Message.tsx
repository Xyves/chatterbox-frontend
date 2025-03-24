import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";

import moment from "moment";
import { useAppSelector } from "../../../app/hooks";
import { useColorMode } from "../../ui/color-mode";
import { AuthState, MessageInterface, UserData } from "../../../types";
import { redirect } from "react-router";

moment().format();
export default function Message({
  message,
  selectedFriend,
}: {
  message: MessageInterface;
  selectedFriend: UserData;
}) {
  const { colorMode } = useColorMode();
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);
  const { sender_id, content, time } = message;
  const currentTime = moment.unix(Number(time)).format("HH:mm YYYY-MM-DD");
  const color = colorMode === "light" ? "white" : "white";
  if (user === null) {
    redirect("/login");
  }
  const asProp = useBreakpointValue({ base: "p", md: "span" });
  return (
    <Box
      width="50%" // Fixed width issue
      paddingX={4}
      marginLeft={message.sender_id != user?.id ? "" : "auto"}
      marginBottom={4}
      color={message.sender_id !== user?.id ? "blue.500" : color}
    >
      {/* Empty top-left box */}

      {/* User Info */}
      <GridItem display="flex" alignItems="center">
        <Heading>
          <Text>
            <Text
              as="span"
              fontWeight="bold"
              fontSize={{ base: "1rem", md: "1.3rem", lg: "1.7rem" }}
              marginRight={5}
            >
              {user === null
                ? null
                : sender_id === user.id
                ? user.nickname
                : selectedFriend.nickname}
            </Text>
            <Text
              as={asProp}
              color="gray.300"
              fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.8rem" }}
            >
              {currentTime}
            </Text>
          </Text>
        </Heading>
      </GridItem>
      <Flex
        alignItems="center"
        justifyContent={
          message.sender_id !== user?.id ? "flex-start" : "flex-end"
        }
        flexDirection={message.sender_id !== user?.id ? "row" : "row-reverse"}
        gap={3}
        width="100%"
      >
        <Center w="50px" h="50px" borderRadius="full">
          <Avatar
            boxSize={["8", "10", "3rem"]}
            src={
              message.sender_id !== user?.id
                ? selectedFriend?.avatar_url ||
                  "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
                : user?.avatar_url ||
                  "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
            }
          />
        </Center>

        <Box
          bg={message.sender_id !== user?.id ? "gray.100" : "blue.500"}
          color={message.sender_id !== user?.id ? "black" : "white"}
          p={3}
          fontSize={["0.6rem", "0.7rem", "0.9rem"]}
          rounded="xl"
          width="3/4"
          wordBreak="break-word"
        >
          {content}
        </Box>
      </Flex>
    </Box>
  );
}
