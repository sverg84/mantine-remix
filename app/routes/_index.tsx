import { List, Stack } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import AboutMeCard from "components/about/AboutMeCard";
import ExperienceCard from "components/experience/ExperienceCard";
import Hero from "components/Hero/Hero";
import SkillsCard from "components/skills/SkillsCard";
import MyName from "consts/MyName";

export const meta: MetaFunction = () => {
  return [
    {
      content: `Hi! I'm ${MyName}, a UI/UX Engineer. I am an ex-Meta Web developer with a knack for building accessible, mobile-first user experiences. An aspiring user experience designer with an eagerness to learn!`,
      name: "description",
    },
  ];
};

export default function Index() {
  return (
    <Stack gap="xl">
      <Hero />
      <Stack component={List} gap="xl">
        <AboutMeCard />
        <ExperienceCard />
        <SkillsCard />
      </Stack>
    </Stack>
  );
}
