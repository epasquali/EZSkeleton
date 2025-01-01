import { Stack } from "@mantine/core";
import { EmailInputField } from "../auth/EmailInputField/EmailInputField";
import { PasswordInputField } from "./PasswordInputField";

export function UserInputs() {
  return (
    <Stack>
      <EmailInputField />
      <PasswordInputField />
    </Stack>
  );
}
