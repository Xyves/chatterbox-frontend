import { Box, Flex, Heading, Input, Text, useSelect } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PasswordInput } from "../components/ui/password-input";
import { Field } from "../components/ui/field";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "../features/authActions.js";

export default function Register() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    // if (success) navigate("/login");
    // if (userInfo) navigate("/chat");
  }, [navigate, userInfo, success]);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<registerData>();
  interface registerData {
    nickname: string;
    password: string;
    email: string;
  }
  const submitForm: SubmitHandler<registerData> = (data) => {
    console.log("registered:", data);
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };
  return (
    <Flex justifyContent={"center"} alignContent={"center"} marginY="auto">
      <Box
        width="80"
        height="55vh"
        margin="auto"
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
        background={"white"}
        color="black"
        rounded="md"
      >
        <Box padding="5">
          <Heading fontSize="3xl" marginBottom="-2">
            Sign up{" "}
          </Heading>
          <Text marginY="6" fontSize={"lg"}>
            Log In <Link to="/login">here</Link>
          </Text>
          <form method="post" onSubmit={handleSubmit(submitForm)}>
            <Field label="nickname" required>
              <Input
                placeholder="John Doe"
                size="md"
                {...register("nickname")}
                css={{ "--focus-color": "#db2777" }}
                marginBottom="5"
              />
            </Field>
            <Field label="email" required>
              <Input
                placeholder="example@domain.com"
                size="md"
                {...register("email")}
                css={{ "--focus-color": "#db2777" }}
                marginBottom="5"
              />
            </Field>
            <Field label="Password" required>
              <PasswordInput
                {...register("password")}
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
