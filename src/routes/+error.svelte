<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	import { title } from '$lib/utils/meta';
	import Link from '../components/Link/Link.svelte';
</script>

<svelte:head>
	<title>
		{title(
			$t('common.errorCodes.title', {
				code: $page.status,
				title: $t(`common.errorCodes.${$page.status}.title`)
			})
		)}
	</title>
</svelte:head>

<article class="grid place-items-center h-screen w-full">
	<div class="flex flex-col items-center p-5">
		<h1 class="errorcode">{$page.status}</h1>
		<h2 class="font-upheaval h2">
			{$t(`common.errorCodes.${$page.status}.quote`, {
				default: $t('common.errorCodes.default.quote')
			})}
		</h2>
		<p class="max-w-md text-center w-full whitespace-pre">
			{$t(`common.errorCodes.${$page.status}.description`, {
				default: $t('common.errorCodes.default.description')
			})}
			<Link href="/">{$t('common.errorCodes.back')}</Link>
		</p>
	</div>
</article>

<style>
	.errorcode {
		@apply font-inception text-primary-500 text-[25vw] leading-[20vw];

		/* glow */
		text-shadow: 0 0 10px rgb(var(--color-primary-500));
	}
</style>
