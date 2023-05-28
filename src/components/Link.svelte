<script lang="ts">
	export let href = '';
	export let icon = '';
</script>

<a
	{href}
	class="font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border w-max"
>
	{#if icon != ''}
		<!-- Icon Component -->
	{/if}
	<slot />
</a>
