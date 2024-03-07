import { Group, rem, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import * as styles from "./subLink.css";

const mockdata = [
  {
    description: "This Pokémon’s cry is very loud and distracting",
    icon: IconCode,
    title: "Open source",
  },
  {
    description: "The fluid of Smeargle’s tail secretions changes",
    icon: IconCoin,
    title: "Free for everyone",
  },
  {
    description: "Yanma is capable of seeing 360 degrees without",
    icon: IconBook,
    title: "Documentation",
  },
  {
    description: "The shell’s rounded shape and the grooves on its.",
    icon: IconFingerprint,
    title: "Security",
  },
  {
    description: "This Pokémon uses its flying ability to quickly chase",
    icon: IconChartPie3,
    title: "Analytics",
  },
  {
    description: "Combusken battles with the intensely hot flames it spews",
    icon: IconNotification,
    title: "Notifications",
  },
];

export default function NavLinks() {
  const [color] = useLocalStorageColor();
  return mockdata.map((item) => (
    <UnstyledButton className={styles.subLink} key={item.title}>
      <Group align="flex-start" wrap="nowrap">
        <ThemeIcon radius="md" size={34} variant="default">
          <item.icon
            color={color}
            style={{ height: rem(22), width: rem(22) }}
          />
        </ThemeIcon>
        <div>
          <Text fw={500} size="sm">
            {item.title}
          </Text>
          <Text c="dimmed" size="xs">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
}
