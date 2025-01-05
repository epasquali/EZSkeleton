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
    /*standardpage: {
      bgColor: "gray.9",
      fontColor: "gray.0",
      hoverbg: "gray.6",
      height: "60px",
    },
    standardpage: {
      bgColor: "red.5",
      fontColor: "grape.5",
      hoverbg: "yellow.6",
      height: "60px",
    },*/
  },
});
