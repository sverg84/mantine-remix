import { Card, Grid, Group, Image, Text } from "@mantine/core";
import GitHubButton from "components/GitHubButton/GitHubButton";
import LinkedInButton from "components/LinkedInButton/LinkedInButton";

import * as styles from "./styles.css";

const DEFAULT_SPAN = 12;
const FORCE_XS = 6;

function Column({
  children,
  forceXS = true,
}: Readonly<{ children: React.ReactNode; forceXS?: boolean }>) {
  return (
    <Grid.Col
      className={styles.col}
      span={{ base: 12, sm: 4, xs: forceXS ? FORCE_XS : DEFAULT_SPAN }}
    >
      {children}
    </Grid.Col>
  );
}

export default function BodyCard() {
  return (
    <Card padding="xl" withBorder={true}>
      <Card.Section p="sm">
        <Text size="lg" ta="center">
          About Me
        </Text>
      </Card.Section>
      <Card.Section px="xl" py="md" withBorder={true}>
        <Group>
          <Image h={300} loading="lazy" radius="md" src="/sverg.jpeg" w={300} />
          Eek
        </Group>
      </Card.Section>
      <Card.Section
        className={styles.footer}
        component="footer"
        px="lg"
        py="xs"
      >
        <Grid>
          <Column>
            <LinkedInButton />
          </Column>
          <Column>
            <LinkedInButton />
          </Column>
          <Column forceXS={false}>
            <LinkedInButton />
            <GitHubButton />
          </Column>
        </Grid>
      </Card.Section>
    </Card>
  );
}
