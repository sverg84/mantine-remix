import { Card, Image, Stack, Text, Title, Tooltip } from "@mantine/core";
import { useAsyncValue } from "@remix-run/react";
import type { WeatherData } from "types/WeatherData";

import * as styles from "./styles.css";

export default function WeatherWidget() {
  const weather = useAsyncValue() as WeatherData;

  return (
    <Card
      bottom="1.5em"
      c="white"
      className={weather.night ? styles.night : styles.day}
      padding="0.5em"
      pos="fixed"
      radius="lg"
      right="1.5em"
      shadow="lg"
    >
      <Stack align="center" gap={0}>
        <Title size="h5">{weather.city}</Title>
        <Tooltip
          label={weather.description}
          offset={16}
          position="left"
          withArrow={true}
        >
          <Image
            alt={weather.description}
            className={styles.img}
            h={64}
            src={weather.icon}
            w={64}
          />
        </Tooltip>
        <Text fw="bold">
          {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
        </Text>
      </Stack>
    </Card>
  );
}
