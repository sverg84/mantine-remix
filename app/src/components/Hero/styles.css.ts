import { rem } from "@mantine/core";
import { keyframes, style } from "@vanilla-extract/css";

export const root = style({
  alignItems: "center",
  backgroundImage:
    "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(../../../static/point_lobos.webp)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  height: "calc(100vh - 60px)",
});

export const inner = style({
  "@media": {
    "(max-width: 62em)": {
      flexDirection: "column",
    },
  },
  display: "flex",
  justifyContent: "space-between",
  marginInline: "var(--mantine-spacing-md)",
});

export const content = style({
  "@media": {
    "(max-width: 62em)": {
      marginRight: 0,
    },
  },
  marginRight: "calc(var(--mantine-spacing-xl) * 3)",
});

export const title = style({
  "@media": {
    "(max-width: 62em)": {
      fontSize: rem(34),
      lineHeight: 1.15,
      maxWidth: "100%",
    },
  },
  color: "var(--mantine-color-white)",
  fontSize: rem(48),
  fontWeight: 900,
  lineHeight: 1.05,
  maxWidth: rem(500),
});

export const description = style({
  "@media": {
    "(max-width: 62em)": {
      maxWidth: "100%",
    },
  },
  color: "var(--mantine-color-white)",
  marginTop: rem(30),
  maxWidth: rem(500),
  opacity: 0.75,
});

export const control = style({
  "@media": {
    "(max-width: 62em)": {
      width: "100%",
    },
  },
  fontSize: rem(22),
  marginTop: rem(40),
  paddingInline: rem(50),
});

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

export const arrow = style({
  bottom: 0,
  color: "var(--mantine-color-white)",
  left: "50%",
  position: "absolute",
});
