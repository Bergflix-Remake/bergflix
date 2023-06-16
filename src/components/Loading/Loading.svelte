<script lang="ts">
	export let animation = 'bricks';
	const animationList: readonly string[] = [
		'elastic',
		'pulse',
		'flashing',
		'collision',
		'revolution',
		'carousel',
		'typing',
		'windmill',
		'bricks',
		'floating',
		'fire',
		'spin',
		'falling',
		'stretching'
	];

	animation = animationList.includes(animation) ? animation : 'bricks';
</script>

<div class="relative">
	<div class={`dot-${animation}`} />
</div>
