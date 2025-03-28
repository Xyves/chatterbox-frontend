import { Card } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { useColorMode } from "../../ui/color-mode";
import { UserData } from "../../../types";

export default function UserInfo({ user }: { user: UserData | null }) {
  const { colorMode } = useColorMode();

  const bg = colorMode === "light" ? "#90e0ef" : "#0E273C";
  return (
    <Card.Root
      bg={"inherit"}
      borderBlockColor={bg}
      borderBlockWidth={"thick"}
      height={["1/4", "1/5"]}
    >
      <Card.Header />
      <Card.Body>
        <Avatar
          marginX="auto"
          size="2xl"
          src={
            user
              ? user.avatar_url
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }
        ></Avatar>
      </Card.Body>
      <Card.Title
        textAlign={"center"}
        fontWeight={"bolder"}
        fontSize="lg"
        marginBottom="6"
      >
        {user ? user.nickname : "nickname"}
      </Card.Title>
    </Card.Root>
  );
}
