import { Box, Button, Input } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
import { SubmitHandler, useForm } from "react-hook-form";
import { postComment } from "../../../features/chatActions";
import { Form } from "react-hook-form";
import { addMessage } from "../../../features/chatSlice";
import { useDispatch } from "react-redux";
export default function ChatInput({ setMessages, messages = [] }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const color = colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950";
  interface submitData {
    chat_id: string;
    id: string;
    content: string;
  }

  const submitForm: SubmitHandler<submitData> = async (data) => {
    const newComment = await postComment(data);
    console.log(messages);
    console.log(newComment);
    dispatch(addMessage(newComment)); // Dispatch action to Redux store
    console.log("Updated messages:", messages);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          placeholder="Say something..."
          variant="subtle"
          background={
            colorMode === "light" ? "whiteAlpha.950" : "blackAlpha.900"
          }
          color={color}
        />
        <Button
          bg="blue.500"
          rounded="2xl"
          marginTop="0.5"
          color={color}
          type="submit"
        >
          Submit Message
        </Button>
      </form>
    </>
  );
}
