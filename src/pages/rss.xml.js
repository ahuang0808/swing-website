import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const episodes = await getCollection('podcast');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: episodes.map((episode) => ({
			...episode.data,
			link: `/episode/${episode.slug}/`,
		})),
	});
}
