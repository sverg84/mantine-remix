import { style } from "@vanilla-extract/css";

export const item = style({
  selectors: {
    "&[data-active=true]": {
      backgroundColor:
        "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))",
    },
  },
});
