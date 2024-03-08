import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const image = style({
  flex: "0 0 100%",
});

export const imageCol = style({
  alignSelf: "center",
});

export const line = style({
  "@media": {
    [vars.smallerThan("md")]: {
      textAlign: "center",
    },
  },
});
