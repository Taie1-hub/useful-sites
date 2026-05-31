import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sitesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/sites' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    category: z.enum(['ai', 'design', 'productivity', 'video', 'dev', 'other']),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    freeTier: z.enum(['free', 'freemium', 'paid']).default('free'),
    requiresSignup: z.boolean().default(false),
    language: z.enum(['中文', '英文', '多语言']).default('多语言'),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(99),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  sites: sitesCollection,
};
