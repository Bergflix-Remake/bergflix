<script lang="ts">
	import type { MediaType } from '$lib/models/common';
	import { base } from '$lib/utils/paths';
	import Title from '../Title/Title.svelte';
	import { t } from '$lib/translations';
	import Button from '../Link/ButtonLink.svelte';

	export let date: string;
	export let age: number;
	export let genre: string;
	export let type: MediaType;
</script>

<div class="flex flex-row items-center gap-2">
	<time datetime={date}>
		{new Date(date).getFullYear()}
	</time>
	<span class="badge variant-ghost-primary">
		{age}+
	</span>
	<span>
		{$t(`common.mediaTypes.${type.toLowerCase()}.singular`)}
	</span>
	<!-- Seperator -->
	<span class="w-1 h-1 rounded-full bg-gray-400" />
	<span>
		{$t('common.genres.' + genre.toLowerCase())}
	</span>
</div>
