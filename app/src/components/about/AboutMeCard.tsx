import { useMantineTheme } from "@mantine/core";
import BodyCard from "components/BodyCard/BodyCard";

import AboutMeCardBody from "./AboutMeCardBody";

export default function AboutMeCard() {
  const theme = useMantineTheme();
  console.log(theme.breakpoints);

  return (
    <BodyCard id="about">
      <AboutMeCardBody />
    </BodyCard>
  );
}
