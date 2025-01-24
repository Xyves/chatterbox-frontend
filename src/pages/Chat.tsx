import { AvatarIcon, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import Friendlist from "../components/Chat/Friendlist";

export default function Chat() {
  return (
    <Grid templateColumns={"12"} height={"88vh"} width="full">
      <Box
        height="auto"
        gridColumnStart="1"
        gridColumnEnd="2"
        background={"yellow.400"}
      >
        <Card.Root>
          <Card.Header />
          <Card.Body>
            <AvatarIcon marginX="auto" size="2xl"></AvatarIcon>
          </Card.Body>
          <Card.Title
            textAlign={"center"}
            fontWeight={"bolder"}
            fontSize="lg"
            marginBottom="6"
          >
            nickname
          </Card.Title>
        </Card.Root>
        <Friendlist />
      </Box>
      <Box
        gridColumnStart={"3"}
        background={"red.200"}
        height="full"
        gridColumnEnd="12"
      >
        <Box margin="16" background="green.600" height="auto">
          <Box>
            <Flex direction={"row"}>
              <AvatarIcon></AvatarIcon>
              <Text>X</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
