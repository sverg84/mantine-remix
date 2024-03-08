import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";

export const link = style({
  "@media": {
    [vars.smallerThan("sm")]: {
      height: rem(42),
      width: "100%",
    },
    [vars.darkSelector]: {
      ":hover": {
        backgroundColor: vars.colors.dark[6],
      },
      color: vars.colors.white,
    },
    [vars.lightSelector]: {
      ":hover": {
        backgroundColor: vars.colors.gray[0],
      },
      color: vars.colors.black,
    },
  },
  alignItems: "center",
  display: "flex",
  fontSize: vars.fontSizes.sm,
  fontWeight: 500,
  height: "100%",
  paddingInline: vars.spacing.md,
  textDecoration: "none",
});
