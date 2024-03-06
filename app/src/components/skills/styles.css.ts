import { style } from "@vanilla-extract/css";

export const container = style({
  "@media": {
    "screen and (max-width: 48em)": {
      flexDirection: "column",
    },
  },
  flexDirection: "row",
  justifyContent: "space-between",
  rowGap: "var(--mantine-spacing-lg)",
});

export const title = style({
  "@media": {
    "screen and (max-width: 48em)": {
      textAlign: "center",
    },
  },
});
