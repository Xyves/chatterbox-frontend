import { Container, Stack, Link } from "@chakra-ui/react";
import "primeicons/primeicons.css";

export default function Footer() {
  return (
    <Container>
      <Stack>
        <Stack direction="row" justify="space-between" align="center">
          Github:
          <i className="pi pi-github"></i>
          <Link href="https://github.com/Xyves">Xyves</Link>
        </Stack>
      </Stack>
    </Container>
  );
}
