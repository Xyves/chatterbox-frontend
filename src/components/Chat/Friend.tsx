import { Card, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "../ui/avatar";

export default function Friend() {
  return (
    <Card.Root
      background={"purple.300"}
      marginBottom="8"
      rounded="2xl"
      margin="4"
    >
      <Card.Body>
        <HStack gap="3">
          <Avatar
            src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
            name="Nate Foss"
          />
          <Stack gap="0">
            <Heading fontWeight="semibold" textStyle="1xl">
              Nate Foss
            </Heading>
          </Stack>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
