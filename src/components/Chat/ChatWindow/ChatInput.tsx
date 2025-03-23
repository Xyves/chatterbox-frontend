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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<submitMessageData>();
  const { user } = useAppSelector((state: { auth: AuthState }) => state.auth);

  const { id } = useParams();
  const color = colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950";

  const submitForm: SubmitHandler<submitMessageData> = async (data) => {
    if (!user) {
      console.error("User is null, cannot post comment.");
      return;
    }

    const newComment = await dispatch(
      postComment({ chat_id: id, content: data.content, sender_id: user.id })
    ).unwrap();
    console.log(newComment);
    reset();
  };
  return (
    <Box padding={"8"}>
      <form onSubmit={handleSubmit(submitForm)} autocomplete="off">
        <Input
          placeholder="Type a message..."
          variant="subtle"
          width="lg"
          borderColor={color}
          borderWidth={"medium"}
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
          rounded="2xl"
          marginTop="0.5"
          className="pi pi-send
"
          color={color}
          type="submit"
        ></Button>
      </form>
    </Box>
  );
}
