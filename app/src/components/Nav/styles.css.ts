import { rem } from "@mantine/core";
import { style } from "@vanilla-extract/css";

import { vars } from "../../../theme";

export { link } from "./link.css";

export const react = style({
  verticalAlign: "middle",
});

export const home = style({
  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
    [vars.lightSelector]: {
      color: vars.colors.black,
    },
  },
  textDecoration: "none",
});

export const dropdownFooter = style({
  borderTopStyle: "solid",
  borderTopWidth: rem(1),
  margin: `calc(${vars.spacing.md} * -1)`,
  marginTop: vars.spacing.sm,
  padding: `${vars.spacing.md} calc(${vars.spacing.md} * 2)`,
  paddingBottom: vars.spacing.lg,
  selectors: {
    [vars.darkSelector]: {
      backgroundColor: vars.colors.dark[7],
      borderTopColor: vars.colors.dark[5],
    },
    [vars.lightSelector]: {
      backgroundColor: vars.colors.gray[0],
      borderTopColor: vars.colors.gray[1],
    },
  },
});
