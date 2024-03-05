import { AspectRatio, Grid, Group, Image, Text, Title } from "@mantine/core";
import MyName from "consts/MyName";
import { intervalToDuration } from "date-fns/intervalToDuration";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import sverg from "../../../static/sverg.webp";
import * as styles from "./body.css";

const BIRTHDATE: Date = new Date("1998-05-06T10:47:00.000-06:00"); // 6 May 1998 11:47 A.M. US Central Time

function Language({ language }: { language: string }) {
  const [color] = useLocalStorageColor();

  return (
    <Text c={color} component="strong" fw="bold">
      {language}
    </Text>
  );
}

export default function AboutMeCardBody() {
  const [color] = useLocalStorageColor();

  const age = intervalToDuration({ end: new Date(), start: BIRTHDATE }).years;

  return (
    <Grid justify="center">
      <Grid.Col className={styles.imageCol} span={{ md: 4 }}>
        <Group justify="center">
          <AspectRatio className={styles.image} maw={300}>
            <Image
              alt={`${MyName} in the tulip field`}
              loading="lazy"
              radius="md"
              src={sverg}
            />
          </AspectRatio>
        </Group>
      </Grid.Col>
      <Grid.Col span={{ md: 8 }}>
        <Title c={color} className={styles.line} order={2} size="h1">
          About Me
        </Title>
        <Text className={styles.line} fs="italic" fw={600} mb="1rem">
          Front-End Software Engineer, Web Developer
        </Text>
        <Text mb="1rem">
          Hi there! My name is{" "}
          <Text c={color} component="span" fs="italic" fw="bold">
            {MyName}
          </Text>
          . I am a <time>{age}</time> year-old software engineer with a fondness
          for user interface and user experience (UI/UX) development.
        </Text>
        <Text mb="1rem">
          I started learning to code during my senior year of high school when I
          took an introduction course to {<Language language="Java" />} on a
          whim, and I loved learning as much as I could since then! Throughout
          my time at university, I applied myself to a substantial amount of
          coursework in {<Language language="C++" />} and{" "}
          {<Language language="Python" />} with a splash of{" "}
          {<Language language="JavaScript" />}, {<Language language="OCaml" />},
          and {<Language language="C#" />}.
        </Text>
        <Text mb="1rem">
          All of my full-time experience (as of Summer 2023) stems from my time
          at Meta where I challenged myself further in exploring web
          programming, learning {<Language language="PHP" />} and{" "}
          {<Language language="React" />} for the first time in a rigorous,
          fast-paced environment.
        </Text>
        <Text mb="1rem">
          Since parting with Meta, I have been self-teaching{" "}
          {<Language language="TypeScript" />} in order to keep my UI-building
          skills fresh, replete with {<Language language="SCSS" />} modules.
        </Text>
      </Grid.Col>
    </Grid>
  );
}
