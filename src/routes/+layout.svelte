<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';
	import { t } from '$lib/translations';

	// Setup Skeleton's global styles:
	import '../theme.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// App Stylesheet
	import '../app.css';

	// FloatingUI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { title } from '$lib/utils/meta';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>{$t(title())}</title>
</svelte:head>

<!-- Overlays -->
<Toast background="variant-filled-primary" position="bl" />
<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<style lang="postcss">
</style>
