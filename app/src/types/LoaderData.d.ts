import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { CoreLoaderData } from "./CoreLoaderData";

export type LoaderData = Readonly<{
  color: string;
  server: Jsonify<CoreLoaderData>;
}>;
