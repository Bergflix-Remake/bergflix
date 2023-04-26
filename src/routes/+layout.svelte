<script lang="ts">
	import '../app.css';
	import type { PageData } from './$houdini';
	import Hero from '../components/Hero/Hero.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';

	export let data: PageData;
	$: ({ FeaturedContent } = data);
</script>

<header>
	<Navbar />
</header>
<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply p-4 min-h-screen;
	}
</style>
