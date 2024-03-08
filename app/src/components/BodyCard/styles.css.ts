import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const header = style({
  "@media": {
    [vars.darkSelector]: {
      backgroundColor: vars.colors.dark[5],
    },
    [vars.lightSelector]: {
      backgroundColor: vars.colors.gray[0],
    },
  },
});
