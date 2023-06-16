<script>
	import { t } from '$lib/translations';

	export let short = false;
	export let className = '';
	export let gradient = false;

	$: text = short ? $t('common.shortName') : $t('common.name');
</script>

<span class="font-extrabold {className}">
	<span>{text}</span><span class="text-primary-500">.</span>
	<span class:gradient-heading={gradient} class:text-primary-500={!gradient}>
		<slot />
	</span>
</span>

<style lang="postcss">
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-br;
		/* Color Stops */
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>
