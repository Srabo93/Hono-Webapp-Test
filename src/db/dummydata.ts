import { db } from "./db-client";
import {
  randProductDescription,
  randProductName,
  randFloat,
  randNumber,
  randImg,
} from "@ngneat/falso";
import { product } from "./schema/product";

async function seed() {
  await db.insert(product).values({
    id: 1234,
    title: randProductName(),
    description: randProductDescription(),
    price: randFloat({ min: 1, max: 2000, fraction: 2 }),
    rating: randNumber({ min: 1, max: 5 }),
    image: randImg({ width: 300, height: 200 }),
  });
}

export async function executeSeed() {
  try {
    await seed();
    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error during seed:", error);
  }
}

executeSeed();
/**
 * FIX: the seeder is not working for whatever reason
 * */
