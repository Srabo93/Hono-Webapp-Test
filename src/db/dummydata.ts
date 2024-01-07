import { db } from "./db-pool";
import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
  randImg,
  randUser,
  randPassword,
  randProductCategory,
} from "@ngneat/falso";
import { products } from "./schema/products";
import { users } from "./schema/users";
import { productCategories } from "./schema/productCategories";

/*
 * TODO: Make Seeder for all the current tables
 */

async function seedUsers() {
  await db.delete(users);
  for (let i = 0; i <= 10; i++) {
    let dummyuser = randUser();
    await db
      .insert(users)
      .values({
        email: dummyuser.email,
        firstName: dummyuser.firstName,
        lastName: dummyuser.lastName,
        password: randPassword(),
      })
      .execute();
  }
  console.log("Users Seed completed successfully");
}

async function seedProductCategory() {
  await db.delete(productCategories);
  for (let i = 0; i <= 10; i++) {
    let cat = randProductCategory();
    await db
      .insert(productCategories)
      .values({
        title: cat,
        description: `This is desc of ${cat}`,
      })
      .execute();
  }
  console.log("Product Category Seed completed successfully");
}

async function seedProducts() {
  await db.delete(products);
  let categoryIds = await db
    .select({ id: productCategories.id })
    .from(productCategories);
  for (let i = 0; i <= 10; i++) {
    const { id } = categoryIds[i];
    await db
      .insert(products)
      .values({
        title: randProductName(),
        description: randProductDescription(),
        price: randFloat({ min: 1, max: 2000, fraction: 2 }),
        rating: randNumber({ min: 1, max: 5 }),
        image: `${randImg({ width: 300, height: 200 })}?random=${i}`,
        categoryId: id,
      })
      .execute();
  }
  console.log("Product Seed completed successfully");
}

async function executeSeed() {
  try {
    await seedProductCategory();
    await seedUsers();
    await seedProducts();
  } catch (error) {
    console.error("Error during seed:", error);
  }
}

executeSeed();
