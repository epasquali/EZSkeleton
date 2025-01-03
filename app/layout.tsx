import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { EZSkeletonTheme } from "./themes";
import { APPMETADATA } from "../config/metadata";

export const metadata = APPMETADATA;

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider withGlobalStyles theme={EZSkeletonTheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
