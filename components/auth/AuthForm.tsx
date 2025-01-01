import { Stack } from "@mantine/core";
import { UserInputs } from "./UserInputs";
import { FormBox } from "../common/FormBox";

interface AuthFormProps {
  headings: string[];
}

export function AuthForm({ headings }: AuthFormProps) {
  return (
    <Stack>
      <FormBox headings={headings}>
        <UserInputs />
      </FormBox>
    </Stack>
  );
}