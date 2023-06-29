<script lang="ts">
	import { iconpack } from '$lib/utils/icon';
	import Icon from '@iconify/svelte';
</script>

<div class="w-full h-full flex-row justify-end hidden md:flex items-center">
	<div
		class="relative overflow-hidden h-10 cursor-pointer text-white bg-black rounded-lg z-0 w-10 hover:w-32 transition-all duration-1000 flex items-center justify-end reveal-anim"
	>
		<p class="absolute left-2 top-1/2 transform -translate-y-1/2  whitespace-nowrap z-0">
			<kbd>Ctrl</kbd> + <kbd>K</kbd>
		</p>
		<Icon icon="search-3-line" class="aspect-square h-full p-2 bg-black z-10" />
	</div>
</div>
