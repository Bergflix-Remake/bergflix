<script>
	import '../app.css';
	import Navbar from '../components/Navbar/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply p-4 min-h-screen;
	}
</style>
