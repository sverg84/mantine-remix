import { style } from "@vanilla-extract/css";

export const image = style({
  flex: "0 0 100%",
});

export const imageCol = style({
  alignSelf: "center",
});

export const line = style({
  "@media": {
    "(max-width: 62em)": {
      textAlign: "center",
    },
  },
});
