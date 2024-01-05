import { db } from "./db-pool";
import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
  randImg,
} from "@ngneat/falso";
import { product } from "./schema/product";

/*
 * TODO: Make Seeder for all the current tables
 */
async function seed() {
  await db.delete(product);
  await db
    .insert(product)
    .values({
      title: randProductName(),
      description: randProductDescription({ length: 25 }).toString(),
      price: randFloat({ min: 1, max: 2000, fraction: 2 }),
      rating: randNumber({ min: 1, max: 5 }),
      image: randImg({ width: 300, height: 200 }),
    })
    .execute();
  console.log("Seed completed successfully");
}

async function executeSeed() {
  try {
    await seed();
  } catch (error) {
    console.error("Error during seed:", error);
  }
}

executeSeed();
