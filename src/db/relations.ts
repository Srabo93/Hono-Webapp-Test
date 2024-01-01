import { relations } from "drizzle-orm";
import { product } from "./schema/product";
import { productCategory } from "./schema/productCategory";

export const productCategoryRelations = relations(
  productCategory,
  ({ many }) => ({
    products: many(product),
  }),
);

export const productRelations = relations(product, ({ one }) => ({
  category: one(productCategory, {
    fields: [product.id],
    references: [productCategory.id],
  }),
}));

/**
 * TODO: Finish the relation of User to Products
 * TODO: Get dummy data working
 * */
