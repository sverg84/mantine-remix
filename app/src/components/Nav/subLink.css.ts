import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const subLink = style({
  "@media": {
    [vars.darkSelector]: {
      ":hover": {
        backgroundColor: vars.colors.dark[7],
      },
    },
    [vars.lightSelector]: {
      ":hover": {
        backgroundColor: vars.colors.gray[0],
      },
    },
  },
  borderRadius: vars.radius.md,
  padding: `${vars.spacing.xs} ${vars.spacing.md})`,
  width: "100%",
});
