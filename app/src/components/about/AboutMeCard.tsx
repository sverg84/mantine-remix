import { useMantineTheme } from "@mantine/core";
import BodyCard from "components/BodyCard/BodyCard";

import AboutMeCardBody from "./AboutMeCardBody";
import AboutMeCardFooter from "./AboutMeCardFooter";

export default function AboutMeCard() {
  const theme = useMantineTheme();
  console.log(theme.breakpoints);

  return (
    <BodyCard footer={<AboutMeCardFooter />} id="#about">
      <AboutMeCardBody />
    </BodyCard>
  );
}
