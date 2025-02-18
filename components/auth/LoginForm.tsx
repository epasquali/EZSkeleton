import { Anchor, Text } from "@mantine/core";
import { AuthForm } from "./AuthForm";
import { AUTH_HEADERS } from "../../config/formheaders";
import { INTERNAL_LINKS } from "../../config/navlinks";

function drawCaptions() {
  return (
    <Text mt={20} ta="center">
      Don't have an account yet?{" "}
      <Anchor href={INTERNAL_LINKS.register} c={"blue.4"}>
        Register here
      </Anchor>{" "}
      instead!
    </Text>
  );
}

export function LoginForm() {
  return (
    <AuthForm
      headings={AUTH_HEADERS.login}
      buttontext="Sign In"
      lowercaptions={drawCaptions()}
      forgotpassword={true}
    />
  );
}
