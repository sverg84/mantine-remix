import type { TypedDeferredData } from "@remix-run/node";
import { defer } from "@remix-run/node";
import type { CoreLoaderData } from "types/CoreLoaderData";
import type { WeatherData } from "types/WeatherData";

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
    updateTime,
    weather,
  });
}
