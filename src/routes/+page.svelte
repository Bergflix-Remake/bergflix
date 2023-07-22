<script lang="ts">
	import { t } from '$lib/translations';
	import { title } from '$lib/utils/meta';
	import { base, typeUrl } from '$lib/utils/paths';
	import Icon from '@iconify/svelte';
	import Hero from '../components/Hero/Hero.svelte';
	import Loading from '../components/Loading/Loading.svelte';
	import type { PageData } from './$houdini';
	import { iconpack } from '$lib/utils/icon';

	export let data: PageData;

	$: ({ HomePageQuery } = data);
	$: featured = $HomePageQuery.data?.featured?.data?.attributes?.video?.data?.attributes;
</script>

<svelte:head>
	<title
		>{title(
			$t('home.title', {
				featured: featured?.title || 'Bergrunner'
			})
		)}</title
	>
</svelte:head>
{#if featured}
	<Hero
		title={{
			text: featured.title,
			image: base(featured.title_image?.data?.attributes?.url)
		}}
		description={featured.description}
		image={base(featured.background_image?.data?.attributes?.url) || ''}
		date={featured.year}
		age={featured.age}
		genre={featured.genre}
		type="movie"
		buttons={[
			{ text: $t('common.actions.watch'), to: typeUrl('movie', '123'), icon: 'play-circle-fill' },
			{ text: $t('common.actions.details'), to: typeUrl('movie', '123'), icon: 'document-2-line' }
		]}
	/>
{:else}
	<section
		class="w-full h-screen bg-black flex flex-col items-center justify-center animate-pulse text-error-400-500-token"
	>
		<Icon icon={iconpack('alert-octagon-line')} class="w-10 h-10" />
		<h1 class="text-2xl text-center mt-4">{$t('common.errorCodes.404.title')}.</h1>
	</section>
{/if}
