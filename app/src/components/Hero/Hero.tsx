import {
  Container,
  darken,
  Group,
  isLightColor,
  lighten,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import EmailButton from "components/buttons/EmailButton";
import GitHubButton from "components/buttons/GitHubButton";
import LinkedInButton from "components/buttons/LinkedInButton";
import ResumeButton from "components/buttons/ResumeButton";
import MyName from "consts/MyName";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import * as styles from "./styles.css";

const AMOUNT = 0.5;
const LABEL =
  "Cypress Cove at Point Lobos State Natural Reserve, Carmel-by-the-Sea, California";

function useGradient() {
  const [color] = useLocalStorageColor();

  const shift = isLightColor(color) ? darken : lighten;

  return { deg: 90, from: color, to: shift(color, AMOUNT) };
}

export default function Hero() {
  const gradient = useGradient();

  const onClick = () => {
    const about = document.getElementById("about") as HTMLElement;
    window.scrollTo({ behavior: "smooth", top: about.offsetTop - 60 });
  };

  return (
    <div aria-label={`Photo of ${LABEL}`} className={styles.root} role="img">
      <Container className={styles.inner} size="lg">
        <div className={styles.content}>
          <Title className={styles.title}>
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

          <Text className={styles.description}>
            Ex-Meta Web developer with a knack for building accessible,
            mobile-first user experiences. Aspiring user experience designer
            with an eagerness to learn!
          </Text>

          <Group className={styles.control}>
            <ResumeButton />
            <GitHubButton />
            <LinkedInButton />
            <EmailButton />
          </Group>
          <Tooltip
            className={styles.tooltip}
            label={LABEL}
            multiline={true}
            position="bottom"
          >
            <Text className={styles.credit}>Picture taken by {MyName}</Text>
          </Tooltip>
        </div>

        <UnstyledButton className={styles.arrow} onClick={onClick}>
          Explore
          <IconChevronDown className={styles.icon} size={36} />
        </UnstyledButton>
      </Container>
    </div>
  );
}
