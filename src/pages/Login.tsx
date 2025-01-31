import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { Link } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authActions.js";

interface loginData {
  nickname: string;
  password: string;
}

export default function Login() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<loginData>();
  const submitForm: SubmitHandler<loginData> = async (data) => {
    console.log("logged:", data);
    await dispatch(loginUser(data));
    console.log(userInfo);
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
              <form onSubmit={handleSubmit(submitForm)}>
                <Field label="nickname" required>
                  <Input
                    placeholder="John Doe"
                    size="md"
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
                <Field label="Password" required>
                  <PasswordInput
                    // value={value.password}

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
                  background={"#db2777"}
                  variant="solid"
                  rounded={"2xl"}
                  type="submit"
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
              <Link to="/register">
                <Button variant="outline" rounded="3xl" color="white">
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
