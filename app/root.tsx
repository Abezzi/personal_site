import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import stylesheet from "~/tailwind.css?url";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { darkSessionResolver } from "./utils/session.server";

// use a loader in order to get data
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await darkSessionResolver(request);

  return {
    theme: getTheme(),
  };
}
export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const { theme } = useLoaderData<typeof loader>();
  const [dTheme] = useTheme();
  return (
    <html lang="en" data-theme={dTheme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
