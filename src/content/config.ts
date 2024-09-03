import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const podcast = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		cover: z.string().url(),
		pubDate: z.coerce.date(),
		shownotes: z.string(),
		audio: z.string().url(),
	}),
});

export const collections = { blog, podcast };
