import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const header = style({
  selectors: {
    [vars.darkSelector]: {
      backgroundColor: vars.colors.dark[5],
    },
    [vars.lightSelector]: {
      backgroundColor: vars.colors.gray[0],
    },
  },
});
