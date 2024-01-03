import { relations } from "drizzle-orm";
import { product } from "./schema/product";
import { productCategory } from "./schema/productCategory";
import { user } from "./schema/user";
import { usersProducts } from "./schema/usersProducts";

export const productCategoryRelations = relations(
  productCategory,
  ({ many }) => ({
    product: many(product),
  }),
);

export const productRelations = relations(product, ({ one, many }) => ({
  category: one(productCategory, {
    fields: [product.id],
    references: [productCategory.id],
  }),
  usersProducts: many(usersProducts),
}));

export const userRelations = relations(user, ({ many }) => ({
  product: many(product),
  usersProducts: many(usersProducts),
}));

export const usersProductsRelations = relations(usersProducts, ({ one }) => ({
  user: one(user, {
    fields: [usersProducts.userId],
    references: [user.id],
  }),
  product: one(product, {
    fields: [usersProducts.productId],
    references: [product.id],
  }),
}));
