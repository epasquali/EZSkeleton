import { ReactNode } from "react";
import { Text, Paper } from "@mantine/core";
import { FormHeadings } from "./FormHeadings";

interface FormBoxProps {
  headings: string[];
  children: ReactNode;
}

export function FormBox({ headings, children }: FormBoxProps) {
  return (
    <>
      <FormHeadings headings={headings} />
      <Paper shadow="xs" w={"35vw"} px={30} py={50}>
        {children}
      </Paper>
    </>
  );
}
