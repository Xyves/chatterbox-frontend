import { Field, Fieldset, Input } from "@chakra-ui/react";
import React from "react";
export default function Login() {
  return (
    <div>
      <form action="">
        <Fieldset.Content>
          <Field label="Name">
            <Input name="name" />
          </Field>
        </Fieldset.Content>
      </form>
    </div>
  );
}
