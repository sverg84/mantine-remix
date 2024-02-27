import { Title, Text, Anchor } from "@mantine/core";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

import * as styles from "./styles.css";

export default function Welcome() {
  const [color] = useLocalStorageOrLoaderColor();
  return (
    <>
      <Title className={styles.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text inherit component="span" c={color}>
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
