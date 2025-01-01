"use client";
import { IconAlertTriangle } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";
import { useField, isEmail } from "@mantine/form";

import classes from "./EmailInputField.module.css";

export function EmailInputField() {
  const emailField = useField({
    initialValue: "",
    validateOnChange: true,
    validate: isEmail("This does not appear to be a valid email format"),
  });

  return (
    <TextInput
      {...emailField.getInputProps()}
      label="Your email address: "
      required
      error={emailField.error}
      rightSection={
        <IconAlertTriangle
          stroke={1.5}
          size={18}
          className={classes.icon}
          style={{
            visibility: emailField.error ? "visible" : "hidden",
          }}
        />
      }
    />
  );
}
