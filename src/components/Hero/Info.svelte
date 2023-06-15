<script lang="ts">
	import InfoRow from './InfoRow.svelte';

	import type { MediaType } from '$lib/models/common';
	import { base } from '$lib/utils/paths';
	import Title from '../Title/Title.svelte';
	import { t } from '$lib/translations';
	import Button from '../Link/ButtonLink.svelte';

	export let title: { text: string; image?: string };
	export let description: string;
	export let date: string;
	export let age: number;
	export let genre: string;
	export let type: MediaType;
	export let buttons: { text: string; to: string; icon?: string }[];

	export let classList = '';
</script>

<div class="flex flex-col w-full p-5 sm:items-start items-center {classList}">
	<Title height="max-h-60" width="max-w-md w-full" image={base(title.image)}>{title.text}</Title>
	<InfoRow {genre} {type} {date} {age} />
	<p class="text-delorean-400 text-lg font-light">
		{description}
	</p>
	<div class="flex flex-row gap-2 flex-wrap justify-center">
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
