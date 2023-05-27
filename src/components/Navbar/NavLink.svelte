<script lang="ts">
	import { page } from '$app/stores';
	export let href = '';
	export let active = false;
	$: isActive = active;
	if ($page.route) {
		isActive = $page.route.id === href;
	}
</script>

<a {href} class={isActive ? 'active' : ''}><slot /></a>

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
