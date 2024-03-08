import { Icon } from "@iconify/react";
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
  IconGitMerge,
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
      { iconify: "ri:remix-run-line", value: "Remix" },
      { icon: IconBrandNodejs, value: "Node" },
      { icon: IconBrandMantine, value: "Mantine" },
      {
        iconify: "fluent-emoji-high-contrast:cupcake",
        value: "Vanilla Extract",
      },
    ],
    title: "Frameworks + Extensions",
  },
  {
    skills: [
      { icon: IconGitMerge, value: "Git" },
      { icon: IconBrandChrome, value: "Chrome DevTools" },
      { icon: IconBrandAws, value: "AWS" },
      { iconify: "simple-icons:sst", value: "SST" },
    ],
    title: "Tools",
  },
];

const ICON_SIZE = 22;

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
              {skills.map((item) => {
                const iconColor = isLightColor(color) ? "black" : "white";
                return (
                  <List.Item
                    icon={
                      <ThemeIcon
                        color={color}
                        radius="lg"
                        size={34}
                        variant="filled"
                      >
                        {item.iconify != null ? (
                          <Icon
                            color={iconColor}
                            height={ICON_SIZE}
                            icon={item.iconify}
                            strokeWidth={2}
                            width={ICON_SIZE}
                          />
                        ) : (
                          <item.icon color={iconColor} size={ICON_SIZE} />
                        )}
                      </ThemeIcon>
                    }
                    key={item.value}
                  >
                    {item.value}
                  </List.Item>
                );
              })}
            </List>
          </Stack>
        ))}
      </Flex>
    </BodyCard>
  );
});

export default SkillsCard;
