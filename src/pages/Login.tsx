import {
  Badge,
  Box,
  Button,
  Container,
  FieldLabel,
  Fieldset,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "../components/ui/password-input";
import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState("");
  return (
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Container
        background={"white"}
        color={"black"}
        maxWidth={"2/5"}
        height={"50vh"}
        display="flex"
        justifyContent={"center"}
        marginTop="32"
        padding="6"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          <Box>
            <Heading size="4xl" marginBottom="8">
              Sign In
            </Heading>
            <Stack gap="8" maxW="sm">
              <form action="">
                <Field label="username" required>
                  <Input
                    placeholder="John Doe"
                    size="md"
                    name="username"
                    css={{ "--focus-color": "#db2777" }}
                    marginBottom="5"
                  />
                </Field>
                <Stack maxW="300px">
                  <Field label="Password" required>
                    <PasswordInput
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      name="password"
                      id="password"
                    />
                  </Field>
                  <Button
                    background={"#db2777"}
                    variant="solid"
                    rounded={"2xl"}
                    marginTop={"8"}
                  >
                    Sign In
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box background={"gray.500"} width={"full"}>
            <Heading size="4xl">Welcome to login</Heading>
            <br />
            <Heading size="3xl">Don't have an account</Heading>
            <Button>Sign up</Button>
          </Box>
        </Grid>
      </Container>
    </Flex>
  );
}
