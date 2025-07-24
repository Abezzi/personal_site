import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL is not defined");
}

const sql = neon(process.env.DATABASE_URL);

export { sql };
