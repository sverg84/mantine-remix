import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const header = style({
  height: `${rem("60px")}`,
  paddingInline: "var(--mantine-spacing-md)",
  borderBottom: `${rem(
    "1px"
  )} solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))`,
});

export const link = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  paddingInline: "var(--mantine-spacing-md)",
  textDecoration: "none",
  color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  fontWeight: 500,
  fontSize: "var(--mantine-font-size-sm)",

  "@media": {
    "(max-width: 48em)": {
      height: `${rem("42px")}`,
      width: "100%",
    },
  },

  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))",
  },
});

export const subLink = style({
  width: "100%",
  padding: "var(--mantine-spacing-xs) var(--mantine-spacing-md)",
  borderRadius: "var(--mantine-radius-md)",

  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
  },
});

export const dropdownFooter = style({
  backgroundColor:
    "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
  margin: "calc(var(--mantine-spacing-md) * -1)",
  marginTop: "var(--mantine-spacing-sm)",
  padding: "var(--mantine-spacing-md) calc(var(--mantine-spacing-md) * 2)",
  paddingBottom: "var(--mantine-spacing-xl)",
  borderTop: `${rem(
    "1px"
  )} solid light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5))`,
});
