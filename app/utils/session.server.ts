import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

// create cookie session
const cStorage = createCookieSessionStorage(
  {
    cookie: {
      name: "__remix-themes",
      path: '/', // cookie here will work on all routes
      httpOnly: true,
      sameSite: 'lax',
      secrets: ['secret'],
      secure: process.env.NODE_ENV === "production"
    },
  }
);

export const darkSessionResolver = createThemeSessionResolver(cStorage)
