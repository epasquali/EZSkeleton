"use client";

import { Anchor, Flex, PasswordInput } from "@mantine/core";
import { useField } from "@mantine/form";
import formValidation from "../../lib/form.validation";

interface PasswordInputFieldProps {
  isRequired: boolean;
  forgotPasswordLink: string;
}

export function PasswordInputField({
  isRequired,
  forgotPasswordLink,
}: PasswordInputFieldProps) {
  function isValidPassword(password: string) {
    return formValidation.isValidPwd(password)
      ? null
      : "Password must be at least 8 characters, contain numbers, special characters, and upper and lowercase letters.";
  }

  const pwdField = useField({
    initialValue: "",
    validateOnChange: true,
    validate: isValidPassword,
  });

  return (
    <>
      <PasswordInput
        label="Your password"
        required={isRequired}
        {...pwdField.getInputProps()}
        error={pwdField.error}
        style={{
          marginBottom: pwdField.error ? "10px" : "43px",
        }}
      />
      <Flex justify="center" mt="-20px">
        <Anchor href={forgotPasswordLink} mt="10" size="sm">
          I forgot my password 🙁
        </Anchor>
      </Flex>
    </>
  );
}
