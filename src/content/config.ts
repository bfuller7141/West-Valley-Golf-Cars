import { defineCollection, z } from "astro:content";

const carts = defineCollection({
  schema: z.object({
    name: z.string(),
    body: z.string(),
    serial: z.string().optional(),
    make: z.string(),
    model: z.string(),
    trim: z.string().optional(),
    year: z.number(),
    color: z.string(),
    price: z.number(),
    passenger: z.number(),
    condition: z.string(),
    fuel: z.string(),
    sold: z.boolean(),
    thumbnail: z.string(),
    images: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    }))
  }),
});

// Legal Collection
const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
  }),
});

export const collections = {
  carts, legal
};
