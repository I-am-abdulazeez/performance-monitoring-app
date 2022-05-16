import { extendTheme } from "@chakra-ui/react";

const Regular: string = "BR Firma Regular";
// const Thin: string = "BR Firma Thin";
const Medium: string = "BR Firma Medium";
// const SemiBold: string =  "BR Firma SemiBold";
// const ExLight: string =  "BR Firma Extra Light";
const Bold: string = "BR Firma Bold";
// const Black: string = "BR Firma Black";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#e8ecff",
      100: "#c0c6f3",
      200: "#98a0e6",
      300: "#707adb",
      400: "#4854d0",
      500: "#2f3bb7",
      600: "#242e8f",
      700: "#192167",
      800: "#0d1440",
      900: "#03061a",
    },
    secondary: {
      50: "#dffeef",
      100: "#b7f5d5",
      200: "#8feebc",
      300: "#64e5a1",
      400: "#3ade88",
      500: "#21c56e",
      600: "#169955",
      700: "#0a6d3c",
      800: "#004323",
      900: "#001806",
    },
    touch: {
      50: "#e6ecff",
      100: "#bcc6f9",
      200: "#8fa1ef",
      300: "#647be7",
      400: "#3955e0",
      500: "#203bc6",
      600: "#182e9b",
      700: "#0f2170",
      800: "#061445",
      900: "#00071c",
    },
    danger: {
      50: "#ffe4ea",
      100: "#fdb8c1",
      200: "#f58b98",
      300: "#ef5d71",
      400: "#e93048",
      500: "#cf162f",
      600: "#a20e24",
      700: "#740819",
      800: "#48020e",
      900: "#1f0003",
    },
    success: {
      50: "#e0feed",
      100: "#bbf3d2",
      200: "#93eab6",
      300: "#69e099",
      400: "#41d77d",
      500: "#28be63",
      600: "#1c944c",
      700: "#106936",
      800: "#04401f",
      900: "#001705",
    },
  },
  fonts: {
    body: `'${Regular}', system-ui, sans-serif`,
    heading: `'${Bold}' Georgia, serif`,
    mono: `'${Medium}' Menlo, monospace`,
  },
});

export default customTheme;
