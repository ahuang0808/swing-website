import { defineCollection, z } from 'astro:content';

const podcast = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		cover: z.string().url(),
		pubDate: z.string(),
		shownotes: z.string(),
		audio: z.string().url(),
	}),
});

export const collections = { podcast };
