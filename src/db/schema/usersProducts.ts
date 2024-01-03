import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { user } from "./user";
import { product } from "./product";

export const usersProducts = pgTable(
  "users_products",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => user.id),
    productId: integer("product_id")
      .notNull()
      .references(() => product.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.productId] }),
  }),
);
