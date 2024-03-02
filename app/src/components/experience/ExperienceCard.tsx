import { Badge, Group, Stack, Text, Timeline } from "@mantine/core";
import BodyCard from "components/BodyCard/BodyCard";
import type { Item as TimelineItem } from "hooks/useExperienceTimelineItems";
import useExperienceTimelineItems from "hooks/useExperienceTimelineItems";
import useLocalStorageOrLoaderColor from "hooks/useLocalStorageOrLoaderColor";

function ItemContent({
  badge: { color, label, variant },
  description,
  timeframe,
  title,
}: TimelineItem) {
  return (
    <Stack gap={4}>
      <Group align="center">
        <Text>{title}</Text>
        <Badge color={color} variant={variant}>
          {label}
        </Badge>
        <Text size="xs">({timeframe})</Text>
      </Group>
      <Text c="dimmed" size="sm">
        {description}
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
