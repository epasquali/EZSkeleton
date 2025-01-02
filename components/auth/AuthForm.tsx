import { ReactNode } from "react";
import { Text, Button, Stack } from "@mantine/core";
import { UserInputs } from "./UserInputs";
import { FormBox } from "../common/FormBox";

interface AuthFormProps {
  headings: string[];
  buttontext: string;
  lowercaptions: ReactNode;
  forgotpassword: boolean;
}

export function AuthForm({
  headings,
  buttontext,
  lowercaptions,
  forgotpassword,
}: AuthFormProps) {
  return (
    <Stack>
      <FormBox headings={headings}>
        <UserInputs forgotpassword={forgotpassword} />

        <Button fullWidth mt="20" size="md">
          {buttontext}
        </Button>
        {lowercaptions}
      </FormBox>
    </Stack>
  );
}
