<script lang="ts">
	export let image = '';
	export let size = 'h1';
	/**
	 * Max height of the image (if given)
	 * @default max-h-24
	 */
	export let height = 'max-h-24';
	/**
	 * Max width of the image (if given)
	 * @default w-full
	 */
	export let width = 'w-full';
	let data;
</script>

<h1 class="{size} {height} font-bold" bind:this={data}>
	{#if image}
		<img class="{height} {width}" src={image} alt="" />
	{:else}
		<slot />
	{/if}
</h1>
