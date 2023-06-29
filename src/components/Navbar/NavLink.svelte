<script lang="ts">
	import { page } from '$app/stores';
	import { iconpack } from '$lib/utils/icon';
	import Icon from '@iconify/svelte';
	export let href = '';
	export let active = false;
	export let icon: string;

	$: icon = iconpack(icon);

	$: isActive = $page.route.id === href || active;
</script>

<a {href} class:active={isActive}>
	<span class="md:block hidden">
		<slot />
	</span>
	<Icon {icon} class="md:hidden text-3xl" />
</a>

<style lang="postcss">
	a {
		@apply text-delorean-600 transition-all font-bold cursor-pointer no-underline text-xl;
	}
	.active {
		@apply text-primary-500;
	}
	a:hover {
		@apply text-primary-500;
	}
</style>
