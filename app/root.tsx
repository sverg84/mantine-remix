import "@mantine/core/styles.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Await,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import type { CoreLoaderData } from "./src/utils/coreLoader";
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import type { ClientLoaderFunctionArgs } from "@remix-run/react";
import * as React from "react";
import PageLoadFallback from "./src/components/PageLoadFallback/PageLoadFallback";
import WeatherWidget from "./src/components/WeatherWidget/WeatherWidget";
import Nav from "./src/components/Nav/Nav";

export { default as loader } from "./src/utils/coreLoader";

export type LoaderData = Readonly<{
  color: string;
  server: Jsonify<CoreLoaderData>;
}>;

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}

export async function clientLoader({
  serverLoader,
}: ClientLoaderFunctionArgs): Promise<LoaderData> {
  const serverData: Jsonify<CoreLoaderData> = await serverLoader();

  const color = localStorage.getItem("color") ?? "#fff";
  return { server: serverData, color };
}

clientLoader.hydrate = true;

export function HydrateFallback() {
  return (
    <Document>
      <PageLoadFallback />
    </Document>
  );
}

export default function App() {
  const {
    server: { weather },
  } = useLoaderData<LoaderData>();
  return (
    <Document>
      <React.Suspense fallback={<PageLoadFallback />}>
        <Await resolve={weather}>
          <Nav />
          <Outlet />
          <WeatherWidget />
        </Await>
      </React.Suspense>
    </Document>
  );
}
