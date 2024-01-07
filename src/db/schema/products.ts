import {
  doublePrecision,
  integer,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";
import { productCategories } from "./productCategories";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  price: doublePrecision("price").default(10.2).notNull(),
  image: varchar("image", { length: 256 }).notNull(),
  rating: doublePrecision("rating").default(10.2),
  categoryId: integer("category_id").references(() => productCategories.id),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
