import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/schema/*.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: "db",
    port: 5432,
    user: "postgres",
    password: "pogchamp",
    database: "example",
  },
} satisfies Config;
