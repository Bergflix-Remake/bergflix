<script lang="ts">
	import { iconpack } from '$lib/utils/icon';
	import Icon from '@iconify/svelte';
	export let href: string;
	export let icon = '';

	$: isExternal = href.includes('http');
	$: icon = iconpack(icon);
</script>

<a
	{href}
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
	class="font-bold ease-in-out cursor-pointer h-min border-b-primary-500 hover:border-b-2 transition-border w-max group"
>
	{#if icon}
		<!-- Icon Component -->
		<Icon {icon} class="inline w-6 h-6 mb-1 mr-1 group-hover:text-primary-500" />
	{:else if isExternal}
		<!-- External Link Icon -->
		<Icon
			icon={'mingcute:external-link-line'}
			class="inline w-6 h-6 mb-1 mr-1 group-hover:text-primary-500"
		/>
	{/if}
	<slot />
</a>
