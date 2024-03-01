import type { MetaFunction } from "@remix-run/node";
import AboutMeCard from "components/about/AboutMeCard";
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
      <AboutMeCard />
      <Welcome />
    </>
  );
}
