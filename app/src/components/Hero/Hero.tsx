import {
  Container,
  darken,
  Group,
  isLightColor,
  lighten,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import EmailButton from "components/buttons/EmailButton";
import GitHubButton from "components/buttons/GitHubButton";
import LinkedInButton from "components/buttons/LinkedInButton";
import ResumeButton from "components/buttons/ResumeButton";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import * as classes from "./styles.css";

const AMOUNT = 0.5;

export default function Hero() {
  const [color] = useLocalStorageColor();

  const shift = isLightColor(color) ? darken : lighten;

  const gradient = { deg: 90, from: color, to: shift(color, AMOUNT) };

  const onClick = () => {
    const about = document.getElementById("about") as HTMLElement;
    window.scrollTo({ behavior: "smooth", top: about.offsetTop - 60 });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.inner} size="lg">
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi! I'm Stephen, a{" "}
            <Text
              component="span"
              gradient={gradient}
              inherit
              variant="gradient"
            >
              UI/UX Engineer
            </Text>
            .
          </Title>

          <Text className={classes.description}>
            Ex-Meta Web developer with a knack for building accessible,
            mobile-first user experiences. Aspiring user experience designer
            with an eagerness to learn!
          </Text>

          <Group className={classes.control}>
            <ResumeButton />
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </Group>
        </div>
        <UnstyledButton className={classes.arrow} onClick={onClick}>
          <Stack align="center" gap={0}>
            Explore
            <IconChevronDown className={classes.icon} size={36} />
          </Stack>
        </UnstyledButton>
      </Container>
    </div>
  );
}
