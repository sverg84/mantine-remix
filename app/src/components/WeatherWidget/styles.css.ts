import { keyframes, style } from "@vanilla-extract/css";

const fadeInRight = keyframes({
  "0%": {
    opacity: "0",
    transform: "translateX(50%)",
  },
  "100%": {
    opacity: "1",
    transform: "translateX(0%)",
  },
});

export const img = style({
  marginBottom: "-0.5em",
  marginTop: "-0.5em",
});

export const night = style({
  animation: `${fadeInRight} 1s`,
  backgroundImage: "linear-gradient(to top, #51678c, #0a2342)",
});

export const day = style({
  animation: `${fadeInRight} 1s`,
  backgroundImage: "linear-gradient(135deg, #067dfc, #27bfc1)",
});
