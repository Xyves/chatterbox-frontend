import { Button, Card, Heading, HStack, Stack } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { Link } from "react-router";

export default function Friend({ friend, onSelectFriend }) {
  // Find chat id between user.id and friend.id -> Move to /chat/:id in chat component fetch messages for chatId sort by latest and friend data
  return (
    <Card.Root
      background={"#14213d"}
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
          <Card.Body>
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
