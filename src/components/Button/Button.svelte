<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// TODO style
	const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch('click')}>
	<slot />
</button>
