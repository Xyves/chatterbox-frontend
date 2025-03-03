import { Box, Flex, Heading } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import React from "react";

export default function User({ user }) {
  return (
    <>
      <Box
        bg="blue.200"
        height="24"
        borderTop="0"
        borderBottom={"6"}
        border={"yellow"}
        borderBlock={"solid"}
      >
        <Box padding="4" width="full">
          <Flex alignItems={"center"}>
            <Box>
              <Avatar
                boxSize={"16"}
                src={
                  user
                    ? user.avatar_url
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
              />
              <Heading display="inline-block" marginLeft={"5"} marginTop="2">
                {user.nickname}
              </Heading>
            </Box>
            <Box
              marginLeft="auto"
              marginRight={"12"}
              display="flex"
              justifyContent={"space-between"}
            >
              <i
                className="pi pi-search w-full h-full "
                style={{ fontSize: "3rem", color: "orange" }}
              ></i>
              <i
                className="pi pi-phone w-full h-full "
                style={{
                  fontSize: "3rem",
                  color: "green",
                  marginLeft: "1rem",
                }}
              ></i>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
