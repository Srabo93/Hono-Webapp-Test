import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./users";
import { products } from "./products";

export const usersProducts = pgTable(
  "users_products",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
    productId: integer("product_id")
      .notNull()
      .references(() => products.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.productId] }),
  }),
);

export type UsersProducts = typeof usersProducts.$inferSelect;

//INFO: maybe the notNull is needed, depending on how relations are build
