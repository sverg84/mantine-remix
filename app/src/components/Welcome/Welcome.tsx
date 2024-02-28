import { Anchor, Text, Title } from "@mantine/core";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

import * as styles from "./styles.css";

export default function Welcome() {
  const [color] = useLocalStorageOrLoaderColor();
  return (
    <>
      <Title className={styles.title} mt={100} ta="center">
        Welcome to{" "}
        <Text c={color} component="span" inherit>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" maw={580} mt="xl" mx="auto" size="lg" ta="center">
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
