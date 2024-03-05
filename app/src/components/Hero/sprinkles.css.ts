import { rem } from "@mantine/core";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const color = {
  "mantine-white": "var(--mantine-color-white)",
};

const marginRight = {
  none: 0,
  xxxl: "calc(var(--mantine-spacing-xl) * 3)",
};

const responsiveProperties = defineProperties({
  conditions: {
    large: {
      "@media": "screen and (min-width: 62em)",
    },
    small: {
      "@media": "screen and (max-width: 62em)",
    },
  },
  defaultCondition: "small",
  properties: {
    flexDirection: ["column", "row"],
    fontSize: [rem(34), rem(48)],
    lineHeight: [1.05, 1.15],
    marginRight,
    maxWidth: ["100%", rem(500)],
    width: ["100%", "auto"],
  },
  responsiveArray: ["small", "large"],
});

const standardProperties = defineProperties({
  properties: {
    alignItems: ["center"],
    color,
    display: ["block", "flex"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  standardProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
