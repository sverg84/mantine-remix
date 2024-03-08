import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const button = style({
  "@media": {
    [vars.smallerThan("md")]: {
      flexGrow: 1,
    },
  },
  borderRadius: vars.radius.xl,
});
