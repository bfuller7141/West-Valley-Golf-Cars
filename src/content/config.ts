import { defineCollection, z } from "astro:content";

const carts = defineCollection({
  schema: z.object({
    name: z.string(),
    featured: z.boolean(),
    make: z.string(),
    model: z.string(),
    trim: z.string().optional(),
    year: z.number(),
    color: z.string(),
    price: z.number(),
    passenger: z.number(),
    condition: z.enum(["New", "Used"]),
    fuel: z.enum(["Gas", "Electric", "Lead Acid"]),
    sold: z.boolean(),
    thumbnail: z.string(),
    images: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
      })
    ),
    content: z.string(),
    serial: z.string().optional(), // Optional field added to match YAML
  }),
});

const legal = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

const testimonials = defineCollection({
  schema: z.object({
    name: z.string(),
    testimonial: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    titlePage: z.string(),
    date: z.date(), 
    thumbnail: z.string(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    slug: z.string().optional(),
    article: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  carts,
  legal,
  testimonials,
  blogCollection,
};