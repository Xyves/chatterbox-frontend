import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { PasswordInput } from "../components/ui/password-input";
import { Field } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
// @ts-ignore
import { registerUser } from "../features/authActions.js";
import Loading from "../components/Loading.js";
import { useAppSelector } from "../app/hooks.js";
import { AuthState, registerData } from "../types.js";

export default function Register() {
  const { loading } = useAppSelector(
    (state: { auth: AuthState }) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {}, [navigate]);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<registerData>();

  const submitForm: SubmitHandler<registerData> = (data) => {
    // console.log("user data:", data);
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    navigate("/login");
  };

  if (loading) {
    <Loading />;
  }
  // if (error) {
  //   <Navigate to={"/"} />;
  // }
  // if (success) return <Navigate to="/login" replace />;
  // if (userToken) return <Navigate to="/chat" replace />;
  return (
    <Flex justifyContent={"center"} alignContent={"center"} marginY="auto">
      <Box
        margin="auto"
        width={["90%", "3/4", "1/2", "1/3", "1/4"]}
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
        background={"whiteAlpha.950"}
        color="black"
        rounded="md"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Box padding="16">
          <Text marginY="6" fontSize={"2xl"}>
            Log In <Link to="/login">here</Link>
          </Text>
          <form method="post" onSubmit={handleSubmit(submitForm)}>
            <Field.Root required marginBottom={"7"}>
              <Field.Label>
                Nickname
                <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="John Doe"
                size="md"
                {...register("nickname")}
                css={{ "--focus-color": "#db2777" }}
              />
              <Field.ErrorText />
            </Field.Root>{" "}
            <Field.Root required marginBottom={"7"}>
              <Field.Label>
                Email
                <Field.RequiredIndicator />
              </Field.Label>
              <Input
                placeholder="example@domain.com"
                size="md"
                {...register("email")}
                css={{ "--focus-color": "#db2777" }}
              />
              <Field.ErrorText />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Password
                <Field.RequiredIndicator />
              </Field.Label>

              <PasswordInput
                {...register("password")}
                name="password"
                placeholder="password"
                id="password"
              />
              <Field.HelperText>
                Must have between 6 and 15 characters
              </Field.HelperText>
              <Field.ErrorText />
            </Field.Root>
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
