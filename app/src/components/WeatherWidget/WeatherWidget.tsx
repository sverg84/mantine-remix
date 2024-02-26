import { useAsyncValue } from "@remix-run/react";
import type { WeatherData } from "../../utils/coreLoader";

import * as styles from "./styles.css";
import { Card, Flex, Text, Tooltip } from "@mantine/core";

export default function WeatherWidget() {
  const weather = useAsyncValue() as WeatherData;
  const currentTime = new Date().getTime();

  const isNight =
    currentTime < weather.sunrise * 1000 ||
    currentTime >= weather.sunset * 1000;

  return (
    <Card
      className={isNight ? styles.night : styles.day}
      pos="fixed"
      bottom="1.5em"
      right="1.5em"
      c="white"
      radius="lg"
      shadow="lg"
      padding="0.5em"
    >
      <Flex align="center" direction="column">
        <Text component="h6" fw="bold">
          {weather.city}
        </Text>
        <Tooltip
          withArrow={true}
          position="left"
          label={<Text>{weather.description}</Text>}
          offset={16}
        >
          <img
            alt={weather.description}
            className={styles.img}
            src={weather.icon}
            width={64}
            height={64}
          />
        </Tooltip>
        <Text fw="bold">
          {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
        </Text>
      </Flex>
    </Card>
  );
}
