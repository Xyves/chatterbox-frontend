import { Flex, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useEffect } from "react";
import { Field } from "../components/ui/field";
import { useState } from "react";
import { AuthState, UserData } from "../types";
import { Button } from "../components/ui/button";
import { getUserData } from "../app/hooks/fetchUser";

import { useAppSelector } from "../app/hooks";
import { updateUser } from "../app/hooks/updateUser.js";

export default function ProfileSettings() {
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);
  const [userData, setUserData] = useState<UserData>({
    id: "",
    bio: "",
    email: "",
    avatar_url: "",
  });

  const handleSubmit = async () => {
    if (!user) {
      console.error("User not found!");
      return;
    }
    if (!user.id) {
      console.error("User ID is required!");
      return;
    }
    if (user.id === "b59ddf02-54c5-4c39-b9af-a0e9e8dc2ec1") {
      console.error("Guest can't modify settings!");
      return;
    }
    try {
      updateUser(userData);
      // console.log("User updated:", updatedUser);
      setUserData({
        id: "",
        email: "",
        bio: "",
        avatar_url: "",
      });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data as UserData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <Flex
      justifyContent={"center"}
      minHeight="30vh"
      width={["90%", "75%", "60%", "45%", "35%"]}
      bg={"darkcyan"}
      position="absolute"
      padding="0"
      flexDirection={"column"}
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      rounded="2xl"
    >
      <Heading
        fontSize={"2xl"}
        marginBottom={"6"}
        padding="7"
        bg="#005959"
        roundedTop="2xl"
      >
        Account
      </Heading>
      <form
        onSubmit={user?.nickname !== "Guest" ? handleSubmit : undefined}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "3rem",
        }}
        className=" "
      >
        <Stack gap="5" padding="4" width="full">
          <Field
            marginX={"auto"}
            width={["100%", "100%", "80%", "70%", "60%"]}
            label={"email"}
          >
            <Input
              placeholder={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></Input>
          </Field>

          <Field
            marginX={"auto"}
            width={["100%", "100%", "80%", "70%", "60%"]}
            label={"bio"}
          >
            <Textarea
              size="md"
              variant="outline"
              placeholder={userData.bio == "" ? "Bio is empty" : userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            />
          </Field>
          <Field
            width={["100%", "100%", "80%", "70%", "60%"]}
            marginX={"auto"}
            label={"avatar_url"}
          >
            <Input
              placeholder={userData.avatar_url}
              onChange={(e) =>
                setUserData({ ...userData, avatar_url: e.target.value })
              }
            ></Input>
          </Field>
        </Stack>
        <Text fontWeight={"bold"}>
          {user?.nickname === "Guest" ? "Can't change data for Guest" : ""}
        </Text>
        <Button width="1/3" type="submit" marginTop="4">
          Update
        </Button>
      </form>
    </Flex>
  );
}
