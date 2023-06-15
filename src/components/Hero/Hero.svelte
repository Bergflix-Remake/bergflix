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
	class="relative w-full h-screen bg-cover bg-no-repeat"
	style="background-image: url('{image}');"
>
	<div
		class="grid md:grid-cols-2 grid-cols-1 grid-rows-1 h-full w-full place-items-center md:place-items-center"
	>
		<Info {title} {description} {date} {age} {genre} {type} {buttons} />
	</div>

	<div class="absolute top-0 left-0 w-full h-full gradient z-0" />
</section>

<style scoped>
	.gradient {
		background: rgb(0, 0, 0);
		background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%);
	}
</style>
