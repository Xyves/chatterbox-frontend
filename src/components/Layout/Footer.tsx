import { Stack, Link } from "@chakra-ui/react";
import "primeicons/primeicons.css";

export default function Footer() {
  return (
    <Stack
      position="fixed"
      bottom="0"
      padding="2"
      background={"yellow.50"}
      width={"full"}
      color="black"
    >
      <Stack direction="row" align="center" justifyContent={"center"}>
        Github:
        <i className="pi pi-github text-center"></i>
        <Link href="https://github.com/Xyves " className="text-center">
          Xyves
        </Link>
      </Stack>
    </Stack>
  );
}
