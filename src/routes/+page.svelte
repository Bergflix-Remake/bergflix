<script lang="ts">
	import { t } from '$lib/translations';
	import { title } from '$lib/utils/meta';
	import { base, typeUrl } from '$lib/utils/paths';
	import Hero from '../components/Hero/Hero.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomePageQuery } = data);
</script>

<svelte:head>
	<title
		>{title(
			$t('home.title', {
				featured: $HomePageQuery.data?.featured?.data?.attributes?.video?.data?.attributes?.title
			})
		)}</title
	>
</svelte:head>

<Hero
	title={{
		text: '',
		image: base('uploads/antartika_1_439bc26337.png?updated_at=2023-06-09T12:32:31.255Z')
	}}
	description="Cool description"
	image={base('/uploads/BERG_WARS_v2_4744892cf4.jpeg') || ''}
	date="2021-09-09"
	age={12}
	genre="Action"
	type="movie"
	buttons={[
		{ text: $t('common.actions.watch'), to: typeUrl('movie', '123'), icon: 'play-circle-fill' },
		{ text: $t('common.actions.details'), to: typeUrl('movie', '123'), icon: 'document-2-line' }
	]}
/>
