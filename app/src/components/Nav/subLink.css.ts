import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const subLink = style({
  borderRadius: vars.radius.md,
  padding: `${vars.spacing.xs} ${vars.spacing.md})`,
  selectors: {
    [`&:hover ${vars.darkSelector}`]: {
      backgroundColor: vars.colors.dark[7],
    },
    [`&:hover ${vars.lightSelector}`]: {
      backgroundColor: vars.colors.gray[0],
    },
  },
  width: "100%",
});
