import { Text, Stack } from "@mantine/core";
import { EmailInput } from "../auth/EmailInput/EmailInput";
import { FormBox } from "../common/FormBox";

export function LoginPage() {
  return (
    <Stack>
      <Text>This is the login page</Text>
      <EmailInput />
      <FormBox />
    </Stack>
  );
}
