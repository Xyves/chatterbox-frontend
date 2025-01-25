import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { PasswordInput } from "../components/ui/password-input";
import { Field } from "../components/ui/field";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Register() {
  const [password, setPassword] = useState("");
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: "",
  });
  return (
    <Flex justifyContent={"center"} alignContent={"center"} marginY="auto">
      <Box
        width="80"
        height="55vh"
        margin="auto"
        display="flex"
        alignItems={"center"}
        background={"#F22C5D"}
        rounded="md"
      >
        <Box padding="5">
          <Heading size="2xl">Sign up </Heading>
          <Text>
            Log In <Link to="/login">here</Link>
          </Text>
          <form>
            <Field label="username" required>
              <Input
                placeholder="John Doe"
                size="md"
                name="username"
                css={{ "--focus-color": "#db2777" }}
                marginBottom="5"
              />
            </Field>
            <Field label="email" required>
              <Input
                placeholder="example@domain.com"
                size="md"
                name="email"
                css={{ "--focus-color": "#db2777" }}
                marginBottom="5"
              />
            </Field>
            <Field label="Password" required>
              <PasswordInput
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
              />
              {/* Confirm password */}
            </Field>
            <Button
              background={"#db2777"}
              variant="solid"
              rounded={"2xl"}
              marginTop={"8"}
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
// <Field
//           label="Email"
//           optionalText={
//             <Badge size="xs" variant="surface">
//               Optional
//             </Badge>
//           }
//         >
//           <Input placeholder="me@example.com" flex="1" />
//         </Field>
//
