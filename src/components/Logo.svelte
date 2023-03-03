<script>
	export let short = false;
	export let className = '';
</script>

<h1 class={className}>
	{#if short}
		Bf
	{:else}
		Bergflix
	{/if}
	<span
		>.
		<slot />
	</span>
</h1>

<style lang="postcss">
	h1 {
		@apply font-extrabold text-white text-3xl;
	}
	h1 > span {
		@apply text-primary-500 font-extrabold;
	}
</style>
