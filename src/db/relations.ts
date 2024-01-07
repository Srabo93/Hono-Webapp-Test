import { relations } from "drizzle-orm";
import { products } from "./schema/products";
import { productCategories } from "./schema/productCategories";
import { users } from "./schema/users";
import { usersProducts } from "./schema/usersProducts";

export const productCategoryRelations = relations(
  productCategories,
  ({ many }) => ({
    products: many(products),
  }),
);

export const productRelations = relations(products, ({ one, many }) => ({
  category: one(productCategories, {
    fields: [products.categoryId],
    references: [productCategories.id],
  }),
  usersProducts: many(usersProducts),
}));

export const userRelations = relations(users, ({ many }) => ({
  products: many(products),
  usersProducts: many(usersProducts),
}));

export const usersProductsRelations = relations(usersProducts, ({ one }) => ({
  users: one(users, {
    fields: [usersProducts.userId],
    references: [users.id],
  }),
  products: one(products, {
    fields: [usersProducts.productId],
    references: [products.id],
  }),
}));
