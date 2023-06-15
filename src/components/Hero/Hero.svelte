<script lang="ts">
	import Info from './Info.svelte';

	import InfoRow from './InfoRow.svelte';

	import type { MediaType } from '$lib/models/common';
	import { base } from '$lib/utils/paths';
	import Title from '../Title/Title.svelte';
	import { t } from '$lib/translations';
	import Button from '../Link/ButtonLink.svelte';

	export let title: { text: string; image?: string };
	export let description: string;
	export let image: string;
	export let date: string;
	export let age: number;
	export let genre: string;
	export let type: MediaType;
	export let buttons: { text: string; to: string; icon?: string }[];
</script>

<section
	class="relative w-full h-screen bg-cover bg-no-repeat z-0 bg-center"
	style="background-image: url('{image}');"
>
	<div
		class="grid md:grid-cols-2 grid-cols-1 grid-rows-1 h-full w-full place-items-center z-10 absolute"
	>
		<Info {title} {description} {date} {age} {genre} {type} {buttons} />
	</div>

	<div class="absolute w-full h-full gradient top-0 left-0" />
</section>

<style>
	.gradient {
		background: radial-gradient(
			at top right,
			rgba(0, 0, 0, 0) 0%,
			rgb(var(--color-surface-50)) 60%
		);
	}
	:global(.dark) .gradient {
		background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, black 60%);
	}
</style>
