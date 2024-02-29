import { useRouteLoaderData } from "@remix-run/react";
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { LoaderData } from "types/LoaderData";

export default function useAppLoaderData() {
  return useRouteLoaderData<LoaderData>("root") as NonNullable<
    Jsonify<LoaderData>
  >;
}
