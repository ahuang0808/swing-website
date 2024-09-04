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

const stuff = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		name: z.string(),
		series: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		heroImage: z.string(),
		images: z.string()
	}),
});

export const collections = { podcast, stuff };
