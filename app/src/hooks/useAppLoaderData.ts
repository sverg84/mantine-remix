import { useRouteLoaderData } from "@remix-run/react";
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { CoreLoaderData } from "types/CoreLoaderData";

export default function useAppLoaderData() {
  return useRouteLoaderData<CoreLoaderData>("root") as NonNullable<
    Jsonify<CoreLoaderData>
  >;
}
