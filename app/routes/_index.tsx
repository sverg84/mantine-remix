import { List, Stack } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import AboutMeCard from "components/about/AboutMeCard";
import ExperienceCard from "components/experience/ExperienceCard";
import Hero from "components/Hero/Hero";
import SkillsCard from "components/skills/SkillsCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { content: "Welcome to Mantine!", name: "description" },
  ];
};

export default function Index() {
  return (
    <>
      <Stack gap="xl">
        <Hero />
        <Stack component={List} gap="xl">
          <AboutMeCard />
          <ExperienceCard />
          <SkillsCard />
        </Stack>
      </Stack>
    </>
  );
}
