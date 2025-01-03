import { createTheme } from "@mantine/core";

export const EZSkeletonTheme = createTheme({
  /*Put your theme overrides here*/

  /*Configure variants for your navbars*/
  navbars: {
    landingpage: {
      bgColor: "blue.5",
      fontColor: "gray.0",
      height: "70px",
    },
    standardpage: {
      bgColor: "red.5",
      fontColor: "grey.9",
      height: "60px",
    },
  },
});
