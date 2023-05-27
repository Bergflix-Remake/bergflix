<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';

	// Setup Skeleton's global styles:
	import '../theme.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// App Stylesheet
	import '../app.css';

	// FloatingUI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- Overlays -->
<Toast background="variant-filled-primary" position="bl" />
<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
</AppShell>

<style lang="postcss">
</style>
