import { Box, Button, Flex, Heading } from "@chakra-ui/react";
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
        border={"yellow"}
        roundedTop="2xl"
        borderBottom={"solid"}
        borderBottomColor={"blue.100"}
        borderBlockWidth={"medium"}
      >
        <Box padding="4" width="full">
          <Flex alignItems={"center"}>
            <Box display="flex" alignItems={"center"}>
              <Avatar
                boxSize={["2rem", "2.5rem", "3rem", "4rem"]}
                src={
                  user
                    ? user.avatar_url
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
              />
              <Heading
                display="inline-block"
                marginLeft={"5"}
                fontWeight={"bold"}
                fontSize={["0.75rem", "1.4rem", "1.4rem", "1.6rem"]}
                color={color}
              >
                {user.nickname}
              </Heading>
            </Box>
            <Box
              marginLeft="auto"
              mdToLg={{ marginRight: "12" }}
              display="flex"
              justifyContent={"space-between"}
              smToMd={{ padding: "0" }}
            >
              <Button
                variant={"plain"}
                fontSize={["1rem", "1.4rem", "2.2rem", "3rem", "3.2rem"]}
              >
                <i
                  className="pi pi-search w-full h-full "
                  style={{ color: "orange" }}
                ></i>
              </Button>
              <Button
                variant={"plain"}
                fontSize={["1rem", "1.4rem", "2.2rem", "3rem", "3.2rem"]}
              >
                <i
                  className="pi pi-phone w-full h-full md:ml-4"
                  style={{
                    color: "green",
                  }}
                ></i>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
