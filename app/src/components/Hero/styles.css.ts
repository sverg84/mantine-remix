import { rem } from "@mantine/core";
import { keyframes, style } from "@vanilla-extract/css";

import { vars } from "../../../theme.css";
import sprinkles from "./sprinkles.css";

export const root = style([
  sprinkles({ alignItems: "center", display: "flex" }),
  {
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(../../../static/point_lobos.webp)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "calc(100vh - 60px)",
  },
]);

export const inner = style([
  sprinkles({
    display: "flex",
    flexDirection: ["column", "row"],
  }),
  {
    justifyContent: "space-between",
    marginInline: vars.spacing.md,
  },
]);

export const content = style([
  sprinkles({
    display: "flex",
    flexDirection: ["column", "column"],
    marginRight: ["none", "xxxl"],
  }),
  { rowGap: rem(40) },
]);

export const title = style([
  sprinkles({
    color: "mantine-white",
    fontSize: [rem(34), rem(48)],
    lineHeight: [1.15, 1.05],
    maxWidth: ["100%", rem(500)],
  }),
  { fontWeight: 900 },
]);

export const description = style([
  sprinkles({
    color: "mantine-white",
    maxWidth: ["100%", rem(500)],
  }),
  { opacity: 0.75 },
]);

export const control = style([
  sprinkles({
    width: ["100%", "auto"],
  }),
  { paddingInline: rem(50) },
]);

const hop = keyframes({
  "0%": {
    transform: "translateY(-20%)",
  },
  "100%": {
    transform: "translateY(0%)",
  },
});

export const icon = style({
  animation: `${hop} 0.5s linear infinite alternate`,
});

export const credit = style([
  sprinkles({ color: "mantine-white" }),
  { alignSelf: "center", textDecoration: "underline dotted" },
]);

export const arrow = style([
  sprinkles({
    alignItems: "center",
    color: "mantine-white",
    display: "flex",
    flexDirection: ["column", "column"],
  }),
  {
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
]);

export const tooltip = style({
  textAlign: "center",
  width: rem(240),
});
