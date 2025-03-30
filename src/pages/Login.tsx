import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { Link, Navigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//@ts-ignore
import { loginUser } from "../features/authActions.js";
import Loading from "../components/Loading.js";
import { useColorMode } from "../components/ui/color-mode.js";
import { useAppSelector } from "../app/hooks.js";
import { AuthState, loginData } from "../types.js";

export default function Login() {
  const { colorMode } = useColorMode();

  const { loading, user, error } = useAppSelector(
    (state: { auth: AuthState }) => state.auth
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<loginData>();
  const submitForm: SubmitHandler<loginData> = async (data) => {
    await dispatch(loginUser(data));
  };
  const handleGuestLogin = async () => {
    await dispatch(loginUser({ nickname: "Guest", password: "guest123" }));
  };
  if (user) {
    return <Navigate to="/chat" replace />;
  }
  if (loading) {
    <Loading />;
  }
  return (
    // #2C4251
    <Flex justifyContent={"center"} alignContent={"center"}>
      <Box
        background={colorMode === "light" ? "whiteAlpha.900" : "#2C4251"}
        color={colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950"}
        display="flex"
        justifyContent={"center"}
        marginTop={{ sm: "12", md: "32" }}
      >
        <Grid md={{ gridTemplateColumns: "repeat(2, 1fr)" }} gap="6">
          <Box padding="6" width="full">
            <Heading size="3xl" marginBottom="8" fontWeight={"bold"}>
              Sign In
            </Heading>
            <Stack gap="8" maxW="sm">
              <form onSubmit={handleSubmit(submitForm)}>
                <Field label="nickname" required>
                  <Input
                    placeholder="John Doe"
                    size="md"
                    borderColor={error ? "red" : ""}
                    outlineColor={error ? "red" : ""}
                    boxShadow={error ? "none" : ""}
                    css={{ "--focus-color": "#db2777" }}
                    {...register("nickname", {
                      required: {
                        value: true,
                        message: "Nickname is required",
                      },
                    })}
                    marginBottom="5"
                  />
                </Field>
                <Field label="password" required>
                  <PasswordInput
                    // value={value.password}
                    borderColor={error ? "red" : ""}
                    outlineColor={error ? "red" : ""}
                    boxShadow={error ? "none" : ""}
                    id="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                    })}
                  />
                </Field>
                <Button
                  bg={"#db2777"}
                  variant="solid"
                  rounded={"2xl"}
                  type="submit"
                  width="26"
                  marginTop={"8"}
                >
                  Sign In
                </Button>
                <Text color={"red"} fontSize="sm">
                  {error ? "Username or password is wrong" : ""}
                </Text>
                <Button
                  onClick={handleGuestLogin}
                  rounded="2xl"
                  // bg={"#db2373"}
                  marginTop={"2"}
                  bg="pink.700"
                  width="32"
                >
                  Log In As Guest
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
              <Link to="/register">
                <Button rounded="3xl" bg={"white"} color={"black"}>
                  Sign up
                </Button>
              </Link>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
}
