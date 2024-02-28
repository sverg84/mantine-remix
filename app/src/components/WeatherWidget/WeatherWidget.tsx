import { Card, Image, Stack, Text, Tooltip } from "@mantine/core";
import { useAsyncValue } from "@remix-run/react";
import type { WeatherData } from "types/WeatherData";

import * as styles from "./styles.css";

export default function WeatherWidget() {
  const weather = useAsyncValue() as WeatherData;
  const currentTime = new Date().getTime();

  const isNight =
    currentTime < weather.sunrise * 1000 ||
    currentTime >= weather.sunset * 1000;

  return (
    <Card
      bottom="1.5em"
      c="white"
      className={isNight ? styles.night : styles.day}
      padding="0.5em"
      pos="fixed"
      radius="lg"
      right="1.5em"
      shadow="lg"
    >
      <Stack align="center" gap={0}>
        <Text component="h6" fw="bold">
          {weather.city}
        </Text>
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
