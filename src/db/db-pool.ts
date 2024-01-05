import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "pogchamp",
  database: "example",
});

export const db = drizzle(pool);
