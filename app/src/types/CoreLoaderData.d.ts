import type { WeatherData } from "./WeatherData";

export type CoreLoaderData = Readonly<{
  weather: Promise<WeatherData>;
  updateTime: string;
}>;
