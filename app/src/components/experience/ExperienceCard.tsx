import { Badge, Flex, Group, Stack, Text, Timeline } from "@mantine/core";
import BodyCard from "components/BodyCard/BodyCard";
import type { Item as TimelineItem } from "hooks/useExperienceTimelineItems";
import useExperienceTimelineItems from "hooks/useExperienceTimelineItems";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

function ItemContent({
  badge: { color, label, variant },
  description,
  skillsList,
  timeframe,
  title,
}: TimelineItem) {
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
          <Badge color={color} variant={variant}>
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

export default function ExperienceCard() {
  const [color] = useLocalStorageOrLoaderColor();
  const items = useExperienceTimelineItems();

  return (
    <BodyCard id="#experience" title="Experience">
      <Timeline
        active={items.length - 1}
        bulletSize={36}
        color={color}
        lineWidth={6}
      >
        {items.map((item) => (
          <Timeline.Item bullet={<item.Icon size={24} />} key={item.id}>
            <ItemContent {...item} />
          </Timeline.Item>
        ))}
      </Timeline>
    </BodyCard>
  );
}
