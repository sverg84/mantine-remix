import { style } from "@vanilla-extract/css";

export const button = style({
  "@media": {
    "(max-width: 62em)": {
      flexGrow: 1,
    },
  },
  borderRadius: "var(--mantine-radius-xl)",
});
