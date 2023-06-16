<script lang="ts">
	type Animations =
		| 'elastic'
		| 'pulse'
		| 'flashing'
		| 'collision'
		| 'revolution'
		| 'carousel'
		| 'typing'
		| 'windmill'
		| 'bricks'
		| 'floating'
		| 'fire'
		| 'spin'
		| 'falling'
		| 'stretching';
	export let animation: Animations = 'bricks';
</script>

<div class="relative">
	<div class={`dot-${animation}`} />
</div>
