import { Box, Button, Input } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
import { SubmitHandler, useForm } from "react-hook-form"; //@ts-ignore
import { postComment } from "../../../features/chatActions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useAppSelector } from "../../../app/hooks";
import "primeicons/primeicons.css";
import { AuthState, submitMessageData } from "../../../types";
export default function ChatInput() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<submitMessageData>();
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);

  const { id } = useParams();
  const color = colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950";

  const submitForm: SubmitHandler<submitMessageData> = async (data) => {
    if (!user) {
      console.error("User is null, cannot post comment.");
      return;
    }

    dispatch(
      postComment({ chat_id: id, content: data.content, sender_id: user.id })
    ).unwrap();
    reset();
  };
  return (
    <Box padding={"5"}>
      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <Input
          placeholder="Type a message..."
          _placeholder={{
            fontSize: ["2xs", "xs", "md", "lg"],
          }}
          variant="subtle"
          borderColor={color}
          width={["50%", "60%", "70%", "80%", "85%"]}
          rounded="lg"
          background={
            colorMode === "light" ? "whiteAlpha.950" : "blackAlpha.900"
          }
          {...register("content", {
            required: "Message cannot be empty",
            validate: (value) =>
              value.trim() !== "" || "Message cannot be just spaces",
          })}
          color={color}
        />
        <Button
          bg="blue.500"
          _hover={{ bg: "blue.700" }}
          rounded="2xl"
          className="pi pi-send"
          paddingX="5"
          marginLeft={"6"}
          type="submit"
        ></Button>
      </form>
    </Box>
  );
}
