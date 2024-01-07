import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import Home from "./pages/home";
import { db } from "./db/db-pool";
import { Product, products } from "./db/schema/products";

const app = new Hono();

const fetchProducts = async (): Promise<Product[]> => {
  return await db.select().from(products);
};

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  const allProducts = await fetchProducts();
  return c.html(<Home allProducts={allProducts} />);
});

export default app;
