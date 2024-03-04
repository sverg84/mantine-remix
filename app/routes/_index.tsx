import { List, Stack } from "@mantine/core";
import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import AboutMeCard from "components/about/AboutMeCard";
import ExperienceCard from "components/experience/ExperienceCard";
import SkillsCard from "components/skills/SkillsCard";

export const headers: HeadersFunction = ({ loaderHeaders }) => ({
  "Cache-Control":
    loaderHeaders.get("Cache-Control") ??
    "max-age=604800, stale-while-revalidate=86400",
});

export const links: LinksFunction = () => [
  {
    as: "image",
    href: "https://dv8qyiytu2cuu.cloudfront.net/sverg.webp",
    rel: "preload",
    type: "image/webp",
  },
  {
    href: "https://dv8qyiytu2cuu.cloudfront.net/sverg_resume.pdf",
    rel: "prefetch",
    type: "application/pdf",
  },
];

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
    </>
  );
}
