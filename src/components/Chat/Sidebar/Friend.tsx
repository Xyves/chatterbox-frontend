import { Button, Card, Heading, HStack, Stack } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { Link } from "react-router";
import { useColorMode } from "../../ui/color-mode";
import { UserData } from "../../../types";

export default function Friend({
  friend,
  onSelectFriend,
}: {
  friend: UserData;
  onSelectFriend: Function;
}) {
  const { colorMode } = useColorMode();

  const bg = colorMode === "light" ? "#2B9EB3" : "#0E273C";
  const color = colorMode === "light" ? "black" : "white";
  return (
    <Card.Root
      background={bg}
      marginBottom="4"
      rounded="2xl"
      margin="2"
      height={"20"}
      display="flex"
      justifyContent={"center"}
      _last={{ marginBottom: "10" }}
    >
      <Link to={`/chat/${friend.chat_id}`} className="w-full">
        <Button
          aria-labelledby={friend.id}
          width="full"
          background="none"
          onClick={() => onSelectFriend(friend)}
        >
          <Card.Body color={color}>
            <HStack gap="3">
              <Avatar
                src={
                  friend.avatar_url
                    ? friend.avatar_url
                    : "https://images.unsplash.com/photo-1511806754518-53bada35f930"
                }
                name={`avatar of ${
                  friend.avatar_url ? friend.avatar_url : "user"
                }`}
                boxSize={"14"}
              />
              <Stack gap="">
                <Heading fontWeight="semibold" textStyle="1xl">
                  {friend.nickname}
                </Heading>
              </Stack>
            </HStack>
          </Card.Body>
        </Button>
      </Link>
    </Card.Root>
  );
}
