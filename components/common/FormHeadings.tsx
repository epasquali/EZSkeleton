import { Stack, Title } from "@mantine/core";

export function FormHeadings({ headings }) {
  return (
    <Stack align="center" justify="center" gap="md" pb={20}>
      {headings?.map((heading, index) => (
        <Title order={1} key={index}>
          {heading}
        </Title>
      ))}
    </Stack>
  );
}
