import BodyCard from "components/BodyCard/BodyCard";
import { memo } from "react";

import AboutMeCardBody from "./AboutMeCardBody";

const AboutMeCard = memo(function AboutMeCard() {
  return (
    <BodyCard id="about">
      <AboutMeCardBody />
    </BodyCard>
  );
});

export default AboutMeCard;
