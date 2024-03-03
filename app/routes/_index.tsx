import { List, Stack } from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import AboutMeCard from "components/about/AboutMeCard";
import ExperienceCard from "components/experience/ExperienceCard";
import SkillsCard from "components/skills/SkillsCard";
import Welcome from "components/Welcome/Welcome";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Remix App" },
    { content: "Welcome to Mantine!", name: "description" },
  ];
};

export default function Index() {
  return (
    <>
      <Stack component={List} gap="xl">
        <AboutMeCard />
        <ExperienceCard />
        <SkillsCard />
      </Stack>
      <Welcome />
    </>
  );
}
