import {
  Flex,
  isLightColor,
  List,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrandAws,
  IconBrandChrome,
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandCss3,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandSass,
  IconBrandTypescript,
  IconGitCommit,
  IconServer2,
  IconSql,
} from "@tabler/icons-react";
import BodyCard from "components/BodyCard/BodyCard";
import useLocalStorageColor from "hooks/useLocalStorageColor";
import { memo } from "react";

import * as styles from "./styles.css";

const skillsByType = [
  {
    skills: [
      { icon: IconBrandJavascript, value: "JavaScript" },
      { icon: IconBrandPhp, value: "PHP/Hack" },
      { icon: IconBrandHtml5, value: "HTML" },
      { icon: IconBrandCss3, value: "CSS" },
      { icon: IconBrandGraphql, value: "GraphQL" },
      { icon: IconSql, value: "SQL" },
      { icon: IconBrandPython, value: "Python" },
      { icon: IconBrandCpp, value: "C++" },
      { icon: IconBrandCSharp, value: "C#" },
    ],
    title: "Languages",
  },
  {
    skills: [
      { icon: IconBrandReact, value: "React" },
      { icon: IconBrandTypescript, value: "TypeScript" },
      { icon: IconBrandMysql, value: "MySQL" },
      { icon: IconBrandSass, value: "Sass" },
      { icon: IconServer2, value: "Remix" },
      { icon: IconBrandNodejs, value: "Node" },
      { icon: IconBrandMantine, value: "Mantine" },
    ],
    title: "Frameworks + Extensions",
  },
  {
    skills: [
      { icon: IconGitCommit, value: "Git" },
      { icon: IconBrandChrome, value: "Chrome DevTools" },
      { icon: IconBrandAws, value: "AWS" },
    ],
    title: "Tools",
  },
];

const SkillsCard = memo(function SkillsCard() {
  const [color] = useLocalStorageColor();
  return (
    <BodyCard id="skills" title="Skills">
      <Flex className={styles.container}>
        {skillsByType.map(({ skills, title }) => (
          <Stack key={title}>
            <Title className={styles.title} order={2} size="h3">
              {title}
            </Title>
            <List spacing="md">
              {skills.map((item) => (
                <List.Item
                  icon={
                    <ThemeIcon
                      color={color}
                      radius="lg"
                      size={34}
                      variant="filled"
                    >
                      <item.icon
                        color={isLightColor(color) ? "black" : "white"}
                        size={22}
                      />
                    </ThemeIcon>
                  }
                  key={item.value}
                >
                  {item.value}
                </List.Item>
              ))}
            </List>
          </Stack>
        ))}
      </Flex>
    </BodyCard>
  );
});

export default SkillsCard;
