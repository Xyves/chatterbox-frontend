import {
  Badge,
  Box,
  Container,
  FieldLabel,
  Fieldset,
  Input,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "../components/ui/password-input";
import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Container background={"#1C2321"}>
        <Box>
          <Stack gap="8" maxW="sm">
            <Field orientation="horizontal" label="Name" required>
              <Input placeholder="John Doe" flex="1" />
            </Field>
            <Stack maxW="300px">
              <Field orientation="horizontal" label="Password" required>
                <PasswordInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Field>
            </Stack>
            <Field
              orientation="horizontal"
              label="Email"
              optionalText={
                <Badge size="xs" variant="surface">
                  Optional
                </Badge>
              }
            >
              <Input placeholder="me@example.com" flex="1" />
            </Field>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
