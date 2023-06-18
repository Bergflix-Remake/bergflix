<script lang="ts">
	import { iconpack } from '$lib/utils/icon';
	import Icon from '@iconify/svelte';
	import Logo from '../Logo.svelte';
	import Loading from '../Loading/Loading.svelte';

	export let url: string;
	export let original: boolean;
	export let loading = false;
	export let error = false;
</script>

<div
	class="relative flex flex-col items-center justify-center flex-shrink-0 overflow-hidden text-center text-white transition-all duration-200 bg-center bg-cover rounded-md shadow-md cursor-pointer hover:-translate-y-1 group aspect-video bg-clean-dark-800 w-80 hover:shadow-2xl hover:shadow-primary-500/10"
>
	{#if error}
		<div class="flex flex-col items-center justify-center text-red-500">
			<Icon icon={'alert-fill'} class="w-10 h-10" />
			<p>Es gab einen Fehler. Bitte versuche es nochmal.</p>
		</div>
	{:else if loading}
		<Loading />
	{:else}
		<img src={url} alt="Thumbnail of..." />
		{#if original}
			<div class="absolute flex top-2 right-2">
				<Logo className="!text-base">Original</Logo>
			</div>
		{/if}
	{/if}
</div>
