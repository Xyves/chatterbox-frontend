import { Flex, Input, Stack } from "@chakra-ui/react";
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
      width={["80%", "60%", "55%", "45%", "25%"]}
      bg={"darkcyan"}
      padding={"12"}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      rounded="2xl"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack gap="5" padding="5">
          <Field
            label={
              userData.nickname === "Guest"
                ? "email (Doesn't work on Guest)"
                : "email"
            }
          >
            <Input
              placeholder={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></Input>
          </Field>

          <Field
            label={
              userData.nickname === "Guest"
                ? "bio (Doesn't work on Guest)"
                : "bio"
            }
          >
            <Input
              placeholder={userData.bio == "" ? "Bio is empty" : userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            ></Input>
          </Field>
          <Field
            label={
              userData.nickname === "Guest"
                ? "avatar_url (Doesn't work on Guest)"
                : "avatar_url"
            }
          >
            <Input
              placeholder={userData.avatar_url}
              onChange={(e) =>
                setUserData({ ...userData, avatar_url: e.target.value })
              }
            ></Input>
          </Field>
        </Stack>
        <Button width="1/2" type="submit">
          Update
        </Button>
      </form>
    </Flex>
  );
}
