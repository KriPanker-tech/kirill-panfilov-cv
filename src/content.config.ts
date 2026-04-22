import { defineCollection, z } from "astro:content";

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    context: z.string(),
    industry: z.array(z.string()),
    summary: z.string(),
    challenge: z.string(),
    work: z.array(z.string()),
    result: z.string(),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        caption: z.string()
      })
    ),
    tags: z.array(z.string())
  })
});

export const collections = { cases };
