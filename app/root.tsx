import "@mantine/core/styles.css";

import { loadIcons } from "@iconify/react";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { HeadersFunction, LinksFunction } from "@remix-run/node";
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
import MyName from "consts/MyName";
import * as React from "react";
import type { CoreLoaderData } from "types/CoreLoaderData";
export { default as loader } from "utils/coreLoader";

const WeatherWidget = React.lazy(
  () => import("components/WeatherWidget/WeatherWidget")
);

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const theme = createTheme({
  cursorType: "pointer",
});

const keywords: string = [MyName, "UI", "UX"].join(" ");

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=604800, stale-while-revalidate=86400",
});

function Document({ children, title }: DocumentProps) {
  loadIcons([
    "ri:remix-run-line",
    "fluent-emoji-high-contrast:cupcake",
    "simple-icons:sst",
  ]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        {title && <title>{title}</title>}
        <Meta />
        <meta content={keywords} name="keywords" />
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

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  return await serverLoader();
}

clientLoader.hydrate = true;

export function HydrateFallback() {
  return (
    <Document title="Loading...">
      <PageLoadFallback />
    </Document>
  );
}

export default function App() {
  const data = useLoaderData<Jsonify<CoreLoaderData>>();
  return (
    <Document title={MyName}>
      <React.Suspense fallback={<PageLoadFallback />}>
        <Page>
          <Outlet />
        </Page>
        <React.Suspense fallback={null}>
          <Await resolve={data.weather}>
            <WeatherWidget />
          </Await>
        </React.Suspense>
      </React.Suspense>
    </Document>
  );
}
