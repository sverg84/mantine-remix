import { Group, Text, Tooltip } from "@mantine/core";
import useAppLoaderData from "hooks/useAppLoaderData";

// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
const RTF = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

const UNITS: ReadonlyArray<{ unit: Intl.RelativeTimeFormatUnit; ms: number }> =
  [
    { ms: 31536000000, unit: "year" },
    { ms: 2628000000, unit: "month" },
    { ms: 86400000, unit: "day" },
    { ms: 3600000, unit: "hour" },
    { ms: 60000, unit: "minute" },
    { ms: 1000, unit: "second" },
  ];

function relativeTimeFromElapsed(elapsed: number): string {
  for (const { unit, ms } of UNITS) {
    if (Math.abs(elapsed) >= ms || unit === "second") {
      return RTF.format(Math.round(elapsed / ms), unit);
    }
  }
  return "";
}

type Props = Readonly<{
  zIndex?: number;
}>;

export default function LatestPushTime({ zIndex = 300 }: Props) {
  const {
    server: { updateTime },
  } = useAppLoaderData();

  const updateTimeAsDate = new Date(updateTime);
  const timeSinceLastUpdate = updateTimeAsDate.getTime() - new Date().getTime();

  return (
    <Group gap={4} justify="center">
      <Text>Last updated:</Text>
      <Tooltip
        label={updateTimeAsDate.toLocaleString()}
        position="bottom"
        withArrow={true}
        zIndex={zIndex}
      >
        <Text component="time" td="underline dotted">
          {relativeTimeFromElapsed(timeSinceLastUpdate)}
        </Text>
      </Tooltip>
    </Group>
  );
}
