import { Image, Text, Title, Tooltip } from "@mantine/core";
import { useAsyncValue } from "@remix-run/react";
import type { WeatherData } from "types/WeatherData";

import * as styles from "./styles.css";
import widget from "./weather.css";

export default function WeatherWidget() {
  const weather = useAsyncValue() as WeatherData;

  const {
    classNames: {
      variants: {
        color: { day, night },
      },
    },
  } = widget;

  return (
    <figure className={weather.night ? night : day}>
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
      <Text component="figcaption" fw="bold">
        {weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
      </Text>
    </figure>
  );
}
