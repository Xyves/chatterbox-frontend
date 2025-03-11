import { Button, Input } from "@chakra-ui/react";
import { useColorMode } from "../../ui/color-mode";
import { SubmitHandler, useForm } from "react-hook-form"; //@ts-ignore
import { postComment } from "../../../features/chatActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../../app/store";
import { UserData } from "../../../types";
import { useAppSelector } from "../../../app/hooks";
export default function ChatInput() {
  interface SubmitData {
    chat_id: string;
    id: number;
    content: string;
  }
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
          placeholder="Say something..."
          variant="subtle"
          borderColor={color}
          borderWidth={"medium"}
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
          color={color}
          type="submit"
        >
          Submit Message
        </Button>
      </form>
    </>
  );
}
