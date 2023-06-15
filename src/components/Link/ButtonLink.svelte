<script lang="ts">
	import Icon from '@iconify/svelte';
	export let href: string;
	export let icon = '';
	export let variant = 'variant-filled-primary';

	$: isExternal = href.includes('http');
</script>

<a
	{href}
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
	class="btn {variant} btn-sm flex-row items-center"
>
	<span class="grid place-items-center">
		{#if icon}
			<!-- Icon Component -->
			<Icon icon={`mingcute:${icon}`} class="inline w-5 h-5" />
		{:else if isExternal}
			<!-- External Link Icon -->
			<Icon icon={'mingcute:external-link-line'} />
		{/if}
	</span>
	<span>
		<slot />
	</span>
</a>
