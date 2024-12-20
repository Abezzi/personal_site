import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import { ReactNode } from "react"
import stylesheet from "~/tailwind.css?url";
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
import Navbar from "./components/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

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
        <meta
          name="description"
          content="portfolio information"
        />
        <title>Alex Herrera | Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-5">
        {children}
      </main>
    </div >
  );
}
