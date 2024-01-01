import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import Home from "./pages/home";
import { Post } from "./typings";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "pogchamp",
  database: "example",
});

const dbConnection = async () => await client.connect();

const db = drizzle(client);

const app = new Hono();

const posts: Post[] = [
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
  {
    id: "1",
    title: "title",
    price: "28.99",
    image: "https://placehold.co/600x400",
  },
];
// Controller
app.use("/public/*", serveStatic({ root: "./" }));
app.get("/", (c) => {
  return c.html(<Home posts={posts} />);
});

export default app;
