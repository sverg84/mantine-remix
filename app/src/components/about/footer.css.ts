import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const col = style({
  alignItems: "center",
  columnGap: rem(8),
  display: "inline-flex",
  justifyContent: "center",
});

export const footer = style({
  "@media": {
    [vars.darkSelector]: {
      backgroundColor: vars.colors.dark[7],
    },
    [vars.lightSelector]: {
      backgroundColor: vars.colors.gray[0],
    },
  },
});
