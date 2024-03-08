import { rem } from "@mantine/core";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "../../../theme.css";

const color = {
  "mantine-white": vars.colors.white,
};

const marginRight = {
  none: 0,
  xxxl: `calc(${vars.spacing.xl} * 3)`,
};

const responsiveProperties = defineProperties({
  conditions: {
    large: {
      "@media": `screen and ${vars.largerThan("sm")}`,
    },
    small: {
      "@media": `screen and ${vars.smallerThan("sm")}`,
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

const sprinkles = createSprinkles(responsiveProperties, standardProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
export default sprinkles;
