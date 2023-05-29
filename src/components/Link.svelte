<script lang="ts">
	import Icon from '@iconify/svelte';
	export let href = '';
	export let icon = '';
	console.log('solar:' + icon);
</script>

<a
	{href}
	class="font-bold text-white ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border w-max group"
>
	{#if icon != ''}
		<!-- Icon Component -->
		<Icon icon={`mingcute:${icon}`} class="inline w-6 h-6 mb-1 mr-1 group-hover:text-primary-500" />
	{/if}
	<slot />
</a>
