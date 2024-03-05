import { isLightColor, Timeline } from "@mantine/core";
import BodyCard from "components/BodyCard/BodyCard";
import useExperienceTimelineItems from "hooks/useExperienceTimelineItems";
import useLocalStorageColor from "hooks/useLocalStorageColor";

import ExperienceTimelineItem from "./ExperienceTimelineItem";

export default function ExperienceCard() {
  const [color] = useLocalStorageColor();
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
          <Timeline.Item
            bullet={
              <item.Icon
                color={isLightColor(color) ? "black" : "white"}
                size={24}
              />
            }
            key={item.id}
          >
            <ExperienceTimelineItem item={item} />
          </Timeline.Item>
        ))}
      </Timeline>
    </BodyCard>
  );
}
