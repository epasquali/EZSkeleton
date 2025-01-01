"use client";
import { PasswordInput } from "@mantine/core";
import { useField } from "@mantine/form";
import formValidation from "../../lib/form.validation";

export function PasswordInputField() {
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
    <PasswordInput
      label="Your password"
      required
      {...pwdField.getInputProps()}
      error={pwdField.error}
    />
  );
}
