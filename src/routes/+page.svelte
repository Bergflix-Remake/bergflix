<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ HomePageQuery } = data);
</script>

<!-- TODO We really need to find a way to flatten this. -->
{$HomePageQuery.data?.featured?.data?.attributes?.video?.data?.attributes?.title}
