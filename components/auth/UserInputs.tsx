import { Stack } from "@mantine/core";
import { EmailInputField } from "../auth/EmailInputField/EmailInputField";
import { PasswordInputField } from "./PasswordInputField";
import { INTERNAL_LINKS } from "../../config/navlinks";

export function UserInputs() {
  return (
    <Stack>
      <EmailInputField />
      <PasswordInputField
        isRequired={true}
        forgotPasswordLink={INTERNAL_LINKS.forgotPassword}
      />
    </Stack>
  );
}
