import type { ComplexStyleRule } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../../theme";

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

const base: ComplexStyleRule = {
  alignItems: "center",
  animation: `${fadeInRight} 1s`,
  borderRadius: vars.radius.lg,
  bottom: 0,
  boxShadow: vars.shadows.lg,
  color: vars.colors.white,
  display: "flex",
  flexDirection: "column",
  padding: "0.5em",
  position: "fixed",
  right: 0,
};

const widget = recipe({
  base,
  variants: {
    color: {
      day: [
        base,
        { backgroundImage: "linear-gradient(135deg, #067dfc, #27bfc1)" },
      ],
      night: [
        base,
        { backgroundImage: "linear-gradient(to top, #283e51, #0a2342)" },
      ],
    },
  },
});

export default widget;
