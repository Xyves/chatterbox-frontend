import { Card } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "../../ui/avatar";

export default function UserInfo({ user }) {
  return (
    <Card.Root background="#0d1b2a">
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
        {user.nickname}
      </Card.Title>
    </Card.Root>
  );
}
