<script lang="ts">
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
		<div class="flex flex-col w-full z-10 p-5">
			<Title height="max-h-60" width="max-w-md" image={base(title.image)}>{title.text}</Title>
			<div class="flex flex-row items-center gap-2">
				<time datetime={date}>
					{new Date(date).getFullYear()}
				</time>
				<span class="badge variant-ghost-primary">
					{age}+
				</span>
				<span>
					{$t('common.mediaTypes.' + type.toLowerCase())}
				</span>
				<!-- Seperator -->
				<span class="w-1 h-1 rounded-full bg-gray-400" />
				<span>
					{$t('common.genres.' + genre.toLowerCase())}
				</span>
			</div>
			<p class="text-delorean-400 text-lg font-light">
				{description}
			</p>
			<div class="flex flex-row gap-2">
				{#each buttons as button, i}
					<Button
						href={button.to}
						icon={button.icon}
						variant={i == 0 ? 'variant-filled-primary' : 'variant-soft-primary'}
					>
						{button.text}
					</Button>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute top-0 left-0 w-full h-full gradient z-0" />
</section>

<style scoped>
	.gradient {
		background: rgb(0, 0, 0);
		background: radial-gradient(at top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%);
	}
</style>
