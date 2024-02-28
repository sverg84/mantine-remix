import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const link = style({
  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
  },
  "@media": {
    "(max-width: 48em)": {
      height: rem("42px"),
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

export const subLink = style({
  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
  },
  borderRadius: "var(--mantine-radius-md)",
  padding: "var(--mantine-spacing-xs) var(--mantine-spacing-md)",
  width: "100%",
});

export const dropdownFooter = style({
  backgroundColor:
    "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
  borderTop: `${rem(
    "1px"
  )} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5))`,
  margin: "calc(var(--mantine-spacing-md) * -1)",
  marginTop: "var(--mantine-spacing-sm)",
  padding: "var(--mantine-spacing-md) calc(var(--mantine-spacing-md) * 2)",
  paddingBottom: "var(--mantine-spacing-xl)",
});
