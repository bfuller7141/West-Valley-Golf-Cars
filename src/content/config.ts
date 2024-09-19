import { defineCollection, z } from "astro:content";

const carts = defineCollection({
  schema: z.object({
    name: z.string(),
    serial: z.string().optional(),
    make: z.string(),
    model: z.string(),
    trim: z.string().optional(),
    year: z.number(),
    color: z.string(),
    price: z.number(),
    passenger: z.number(),
    condition: z.enum(['New', 'Used']),
    fuel: z.enum(['Gas', 'Electric', 'Lead Acid']),
    sold: z.boolean(),
    thumbnail: z.string(),
    images: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })),
    body: z.string(),
  }),
});

// Legal Collection
const legal = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.string(), // The legal content as markdown
  }),
});

export const collections = {
  carts, legal
};