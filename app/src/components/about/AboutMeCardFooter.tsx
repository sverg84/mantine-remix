import { CardSection, Grid } from "@mantine/core";
import EmailButton from "components/buttons/EmailButton";
import GitHubButton from "components/buttons/GitHubButton";
import LinkedInButton from "components/buttons/LinkedInButton";
import ResumeButton from "components/buttons/ResumeButton";

import * as styles from "./footer.css";

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

export type AboutMeCardFooterType = typeof AboutMeCardFooter;

export default function AboutMeCardFooter() {
  return (
    <CardSection className={styles.footer} component="footer" px="lg" py="xs">
      <Grid>
        <Column>
          <ResumeButton />
        </Column>
        <Column>
          <EmailButton />
        </Column>
        <Column forceXS={false}>
          <GitHubButton />
          <LinkedInButton />
        </Column>
      </Grid>
    </CardSection>
  );
}
