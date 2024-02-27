import { useLocalStorage } from "@mantine/hooks";
import { useRouteLoaderData } from "@remix-run/react";
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { LoaderData } from "~/root";

export default function useLocalStorageOrLoaderColor() {
  const { color } = useRouteLoaderData<LoaderData>("root") as NonNullable<
    Jsonify<LoaderData>
  >;

  return useLocalStorage({
    key: "color",
    defaultValue: color,
  });
}
