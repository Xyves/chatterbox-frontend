import { Button, Input } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
import { SubmitHandler, useForm } from "react-hook-form"; //@ts-ignore
import { postComment } from "../../../features/chatActions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../../app/store";
import { useAppSelector } from "../../../app/hooks";
import "primeicons/primeicons.css";
export default function ChatInput() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<submitData>();
  const { user } = useAppSelector((state: RootState) => state.auth);
  const { id } = useParams();
  const color = colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.950";
  interface submitData {
    chat_id: string;
    id: string;
    content: string;
  }

  const submitForm: SubmitHandler<submitData> = async (data) => {
    const newComment = await dispatch(
      postComment({ chat_id: id, content: data.content, sender_id: user.id })
    ).unwrap();
    console.log(newComment);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
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
          {...register("content")}
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
    </>
  );
}
