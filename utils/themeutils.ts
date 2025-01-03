import { MantineTheme } from "@mantine/core";

interface getMantineColorParams {
  color: string;
  theme: MantineTheme;
}

//Gets the color from the theme by dereferencing the theme string (eg "blue.5)
// into the proper array (eg. theme.colors.blue[5])")
export function getMantineColor({ color, theme }: getMantineColorParams) {
  const [base, shade] = color.split(".");
  return theme.colors[base]?.[parseInt(shade)] || color;
}
