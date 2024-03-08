import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export const link = style({
  "@media": {
    [vars.smallerThan("sm")]: {
      height: rem(42),
      width: "100%",
    },
  },
  alignItems: "center",
  display: "flex",
  fontSize: vars.fontSizes.sm,
  fontWeight: 500,
  height: "100%",
  paddingInline: vars.spacing.md,
  selectors: {
    [`&:hover ${vars.darkSelector}`]: {
      backgroundColor: vars.colors.dark[7],
    },
    [`&:hover ${vars.lightSelector}`]: {
      backgroundColor: vars.colors.gray[0],
    },
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
    [vars.lightSelector]: {
      color: vars.colors.black,
    },
  },
  textDecoration: "none",
});
