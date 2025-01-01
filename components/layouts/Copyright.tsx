//Simple bottom copyright bar
import { Text } from "@mantine/core";
import { COPYRIGHT } from "../../config/metadata";

export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Text bg="gray.2" size="xs" ta="center">
        © {currentYear} {COPYRIGHT}
      </Text>
    </footer>
  );
}
