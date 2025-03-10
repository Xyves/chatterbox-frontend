import { Box, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { Field } from "../components/ui/field";
import { useState } from "react";
const backendUrl = "http://127.0.0.1:4000/api";

export default function ProfileSettings() {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await fetch(`${backendUrl}/user/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const data = await response.json();
      console.log("Backend response:", data);
      setUserData(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box
      padding="
    5"
      bg={"green"}
      width="1/2"
      marginX="auto"
    >
      <form className="p-5">
        <Field label="nickname">
          <Input placeholder={userData.nickname}></Input>
        </Field>
        <Field label="password">
          <Input placeholder="Enter your new password"></Input>
        </Field>
        <Field label="email">
          <Input placeholder={userData.email}></Input>
        </Field>
        <Field label="bio">
          <Input
            placeholder={userData.bio == "" ? "Bio is empty" : userData.bio}
          ></Input>
        </Field>
        <Field label="avatar_url">
          <Input value={userData.avatar_url}></Input>
        </Field>
      </form>
    </Box>
  );
}
