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
  const [value, setValue] = useState({ nickname: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nickname = formData.get("nickname");
    const password = formData.get("password");
    const response = await fetch(
      "messaging-app-backend-production-b29f.up.railway.app/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, password }),
      }
    );
  };
  return (
    <Flex justifyContent={"center"} alignContent={"center"} height="55vh">
      <Box
        background={"white"}
        color={"black"}
        display="flex"
        justifyContent={"center"}
        marginTop="32"
      >
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          <Box padding="6" width="full">
            <Heading size="3xl" marginBottom="8" fontWeight={"bold"}>
              Sign In
            </Heading>
            <Stack gap="8" maxW="sm">
              <form onSubmit={() => submitForm}>
                <Field label="username" required>
                  <Input
                    placeholder="John Doe"
                    size="md"
                    name="username"
                    css={{ "--focus-color": "#db2777" }}
                    marginBottom="5"
                  />
                </Field>
                <Field label="Password" required>
                  <PasswordInput
                    value={value.password}
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
              </form>
            </Stack>
          </Box>
          <Flex justifyContent={"center"}>
            <Box
              background={"gray.500"}
              width={"full"}
              padding="16"
              color="white"
              alignItems="center"
              justifyContent={"center"}
              display="flex"
              flexDirection={"column"}
              bgGradient={
                "linear-gradient(to right bottom, #ff4759, #ff4560, #ff4467, #ff436e, #ff4375, #fc407b, #fa3e82, #f63c88, #ee388f, #e53696, #dc359c, #d136a2);"
              }
            >
              <Heading size="3xl" fontWeight={"bold"} marginBottom="2">
                Welcome to login
              </Heading>
              <Heading size="lg" marginBottom={"6"}>
                Don't have an account?
              </Heading>
              <Button variant="outline" rounded="3xl" color="white">
                Sign up
              </Button>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
}
