import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource-variable/dm-sans";

export const theme = extendTheme({
  colors: {
    purple: {
      500: "#986dff",
    },
    black: {
      500: "#13131F",
    },
    gray: {
      400: "#9ca3af",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
} as ThemeConfig);
