import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const container = style({
  "@media": {
    [`screen and ${vars.smallerThan("sm")}`]: {
      flexDirection: "column",
    },
  },
  flexDirection: "row",
  justifyContent: "space-between",
  rowGap: vars.spacing.lg,
});

export const title = style({
  "@media": {
    [`screen and ${vars.smallerThan("sm")}`]: {
      textAlign: "center",
    },
  },
});
