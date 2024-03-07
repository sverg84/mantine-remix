import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const link = style({
  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
  },
  "@media": {
    "(max-width: 48em)": {
      height: rem(42),
      width: "100%",
    },
  },
  alignItems: "center",
  color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  display: "flex",
  fontSize: "var(--mantine-font-size-sm)",
  fontWeight: 500,
  height: "100%",
  paddingInline: "var(--mantine-spacing-md)",
  textDecoration: "none",
});
