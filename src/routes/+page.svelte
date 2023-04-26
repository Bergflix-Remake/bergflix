<script lang="ts">
	import type { PageData } from './$houdini';

	import Hero from '../components/Hero/Hero.svelte';
	import Layout from './+layout.svelte';

	export let data: PageData;

	$: ({ Data } = data);
	$: featured = $Data.data?.featured?.data?.attributes?.video?.data?.attributes;
</script>
