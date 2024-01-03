import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "pogchamp",
  database: "example",
});

try {
  const dbConnection = async () => await client.connect();
} catch (error) {
  console.log(error);
}

export const db = drizzle(client);
