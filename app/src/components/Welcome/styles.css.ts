import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

export const title = style({
  "@media": {
    "(max-width: 62em)": {
      fontSize: rem("50px"),
    },
  },
  color: "light-dark(var(--mantine-color-black), var(--mantine-color-white))",
  fontSize: rem("100px"),
  fontWeight: 900,
  letterSpacing: rem("-2px"),
});
