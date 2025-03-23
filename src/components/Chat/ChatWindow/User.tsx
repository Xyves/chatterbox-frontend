import { Box, Flex, Heading } from "@chakra-ui/react";
import { Avatar } from "../../ui/avatar";
import { useColorMode } from "../../ui/color-mode";
import { UserData } from "../../../types";

export default function User({ user }: { user: UserData }) {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "white" : "#154D57";
  const color = colorMode !== "light" ? "white" : "black";
  return (
    <>
      <Box
        bg={bg}
        borderTop="0"
        borderBottom={"6"}
        border={"yellow"}
        roundedTop="2xl"
        borderBlock={"solid"}
      >
        <Box padding="4" width="full">
          <Flex alignItems={"center"}>
            <Box>
              <Avatar
                boxSize={["2rem", "3rem", "4rem"]}
                src={
                  user
                    ? user.avatar_url
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
              />
              <Heading
                display="inline-block"
                marginLeft={"5"}
                marginTop="2"
                fontWeight={"bold"}
                fontSize={["1.5rem"]}
                color={color}
              >
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
                style={{ fontSize: "2.5rem", color: "orange" }}
              ></i>
              <i
                className="pi pi-phone w-full h-full "
                style={{
                  fontSize: "2.5rem",
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
