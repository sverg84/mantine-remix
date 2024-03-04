import "@mantine/core/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import type { ClientLoaderFunctionArgs } from "@remix-run/react";
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
import type { Jsonify } from "@remix-run/server-runtime/dist/jsonify";
import Page from "components/Page/Page";
import PageLoadFallback from "components/PageLoadFallback/PageLoadFallback";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import * as React from "react";
import type { CoreLoaderData } from "types/CoreLoaderData";
import type { LoaderData } from "types/LoaderData";

export { default as loader } from "utils/coreLoader";

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const theme = createTheme({
  cursorType: "pointer",
});

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

function Document({ children, title }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
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
  return { color, server: serverData };
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
        <Page>
          <Outlet />
        </Page>
        <React.Suspense fallback={null}>
          <Await resolve={weather}>
            <WeatherWidget />
          </Await>
        </React.Suspense>
      </React.Suspense>
    </Document>
  );
}
