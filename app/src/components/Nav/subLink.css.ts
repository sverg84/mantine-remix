import { style } from "@vanilla-extract/css";

export const subLink = style({
  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
  },
  borderRadius: "var(--mantine-radius-md)",
  padding: "var(--mantine-spacing-xs) var(--mantine-spacing-md)",
  width: "100%",
});
