import { useRouteLoaderData } from "@remix-run/react";
import type { LoaderData } from "types/LoaderData";

export default function LatestPushTime() {
  const data = useRouteLoaderData<LoaderData>("root");
  console.log(data);
  return <></>;
}
