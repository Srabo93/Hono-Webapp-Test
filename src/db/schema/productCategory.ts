import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const productCategory = pgTable("product_category", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
});
