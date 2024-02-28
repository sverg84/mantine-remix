import { useLocalStorage } from "@mantine/hooks";
import { useRouteLoaderData } from "@remix-run/react";
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { LoaderData } from "types/LoaderData";

export default function useLocalStorageOrLoaderColor() {
  const { color } = useRouteLoaderData<LoaderData>("root") as NonNullable<
    Jsonify<LoaderData>
  >;

  return useLocalStorage({
    defaultValue: color,
    key: "color",
  });
}
