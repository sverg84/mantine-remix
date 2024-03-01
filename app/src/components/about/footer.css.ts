import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const col = style({
  alignItems: "center",
  columnGap: rem(8),
  display: "inline-flex",
  justifyContent: "center",
});

export const footer = style({
  backgroundColor:
    "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7))",
});
