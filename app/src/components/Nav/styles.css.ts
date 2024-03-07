import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export { link } from "./link.css";

export const react = style({
  verticalAlign: "middle",
});

export const home = style({
  color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  textDecoration: "none",
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
  paddingBottom: "var(--mantine-spacing-lg)",
});
