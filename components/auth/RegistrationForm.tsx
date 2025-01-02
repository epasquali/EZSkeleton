import { Anchor, Text } from "@mantine/core";
import { AuthForm } from "./AuthForm";
import { APPNAME } from "../../config/metadata";
import { AUTH_HEADERS } from "../../config/formheaders";
import { INTERNAL_LINKS } from "../../config/navlinks";

function drawCaptions() {
  return (
    <Text mt={20} ta="center">
      Already using {APPNAME}?{" "}
      <Anchor href={INTERNAL_LINKS.login} c={"blue.4"}>
        Login
      </Anchor>{" "}
      instead!
    </Text>
  );
}

export function RegistrationForm() {
  return (
    <AuthForm
      headings={AUTH_HEADERS.register}
      buttontext={"Sign Up"}
      lowercaptions={drawCaptions()}
    />
  );
}
