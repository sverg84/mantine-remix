import type { TypedDeferredData } from "@remix-run/node";
import { defer } from "@remix-run/node";

export type WeatherData = Readonly<{
  celsius: number;
  city: string;
  description: string;
  fahrenheit: number;
  icon: string;
  sunrise: number;
  sunset: number;
}>;

export type CoreLoaderData = Readonly<{
  weather: Promise<WeatherData>;
  updateTime: string;
}>;

async function genFetch(url: string) {
  const res = await fetch(url);
  return await res.json();
}

function genWeatherData(): Promise<WeatherData> {
  return genFetch(
    "https://vjkuarupgi.execute-api.us-east-2.amazonaws.com/default"
  );
}

function genLatestUpdateTime(): Promise<string> {
  return genFetch(
    "https://3a15ktad20.execute-api.us-east-2.amazonaws.com/Production/"
  );
}

export default async function coreLoader(): Promise<
  TypedDeferredData<CoreLoaderData>
> {
  const weather = genWeatherData();
  const updateTime = await genLatestUpdateTime();

  return defer({
    weather,
    updateTime,
  });
}
