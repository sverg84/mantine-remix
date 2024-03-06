import { Badge, Flex, Group, Stack, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Item as TimelineItem } from "hooks/useExperienceTimelineItems";

import * as styles from "./badge.css";

type Props = Readonly<{ item: TimelineItem }>;

export default function ExperienceTimelineItem({
  item: {
    badge: { color, label, variant },
    description,
    href,
    skillsList,
    timeframe,
    title,
  },
}: Props) {
  return (
    <Stack gap={4}>
      <Flex
        align={{ base: "flex-start", sm: "center" }}
        columnGap={{ base: 0, sm: "md" }}
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, sm: 0 }}
        rowGap={{ base: 4, sm: 0 }}
      >
        <Text>{title}</Text>
        <Group>
          <Badge
            className={styles.badge}
            color={color}
            component={Link}
            rightSection={<IconArrowUpRight size={16} />}
            target="_blank"
            to={href}
            variant={variant}
          >
            {label}
          </Badge>
          <Text size="xs">({timeframe})</Text>
        </Group>
      </Flex>
      <Text c="dimmed" size="sm">
        {description}
      </Text>
      <Text component="span" size="sm">
        <Group align="center" gap={4} wrap="nowrap">
          <Text fw="bold" inherit={true}>
            Skills:
          </Text>
          <Text inherit={true}>{skillsList.join(", ")}</Text>
        </Group>
      </Text>
    </Stack>
  );
}
