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
  const hoverBg = colorMode === "light" ? "#258899" : "#153c5c";
  const color = colorMode === "light" ? "black" : "white";
  return (
    <Card.Root
      background={bg}
      marginBottom="4"
      rounded="2xl"
      margin="1"
      height={"20"}
      display="flex"
      justifyContent={"center"}
      _last={{ marginBottom: "10" }}
      variant="subtle"
      maxWidth={"full"}
      _hover={{ bg: hoverBg }}
    >
      <Link to={`/chat/${friend.chat_id}`} className="w-full">
        <Button
          aria-labelledby={friend.id}
          background="none"
          onClick={() => onSelectFriend(friend)}
        >
          <Card.Body color={color} width="full">
            <HStack gap="2.5">
              <Avatar
                src={
                  friend.avatar_url
                    ? friend.avatar_url
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                name={`avatar of ${
                  friend.avatar_url ? friend.avatar_url : "user"
                }`}
                boxSize={{ md: "3rem", lg: "4rem" }}
              />
              <Stack gap="">
                <Heading
                  fontWeight="bold"
                  textStyle="1xl"
                  fontSize={{ smToMd: "sm", mdToLg: "sm", xlTo2xl: "xl" }}
                >
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
