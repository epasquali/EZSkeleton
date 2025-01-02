import { Stack } from "@mantine/core";
import { EmailInputField } from "../auth/EmailInputField/EmailInputField";
import { PasswordInputField } from "./PasswordInputField";
import { INTERNAL_LINKS } from "../../config/navlinks";

interface UserInputsProps {
  forgotpassword: boolean;
}

export function UserInputs({ forgotpassword }: UserInputsProps) {
  return (
    <Stack>
      <EmailInputField />
      <PasswordInputField
        isRequired={true}
        forgotPasswordLink={forgotpassword && INTERNAL_LINKS.forgotPassword}
      />
    </Stack>
  );
}
