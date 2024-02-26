import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes["title"] ?? ""} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ deg: 90, from: "#ffc2e2", to: "#4169e1" }}
        >
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Remix project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Remix integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/remix/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </>
  );
}
