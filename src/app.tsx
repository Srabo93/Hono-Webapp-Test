import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import Home from "./pages/home";
import { Post } from "./typings";
import { db } from "./db/db-pool";

const app = new Hono();

async function test() {
  //TODO: we are not getting autocompletion here even though the schemas in the config take the glob pattern. Maybe leave the glob pattern and import them manually AB test
  let result = db.query;
}

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
