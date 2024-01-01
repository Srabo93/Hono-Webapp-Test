import { doublePrecision, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const product = pgTable("product", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  price: doublePrecision("price").default(10.2).notNull(),
  image: varchar("image", { length: 256 }).notNull(),
  rating: doublePrecision("rating").default(10.2),
});
