import type { MetaFunction } from "@remix-run/node";
import BodyCard from "components/BodyCard/BodyCard";
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
      {/* <Card
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        padding="xl"
        shadow="md"
        target="_blank"
      >
        <Card.Section>
          <Image
            alt="No way!"
            h={160}
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          />
        </Card.Section>

        <Text fw={500} mt="md" size="lg">
          You&apos;ve won a million dollars in cash!
        </Text>

        <Text c="dimmed" mt="xs" size="sm">
          Please click anywhere on this card to claim your reward, this is not a
          fraud, trust us
        </Text>
      </Card> */}
      <BodyCard />
      <Welcome />
    </>
  );
}
