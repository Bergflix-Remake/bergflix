<script lang="ts">
	import DesktopNav from '../components/Navbar/DesktopNav.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';
	import { t } from '$lib/translations';

	// Setup Skeleton's global styles:
	import '../theme.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// App Stylesheet
	import '../app.css';

	// Three Dots Loading Spinner animations
	import '../three-dots.css';

	// FloatingUI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { title } from '$lib/utils/meta';
	import MobileNav from '../components/Navbar/MobileNav.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>{$t(title())}</title>
</svelte:head>

<!-- Overlays -->
<Toast background="variant-filled-primary" position="bl" />
<Modal />

<AppShell slotHeader="absolute top-0 w-full z-50" slotFooter="absolute bottom-0 w-full" class="">
	<svelte:fragment slot="header">
		<DesktopNav />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<svelte:fragment slot="footer">
		<MobileNav />
	</svelte:fragment>
</AppShell>

<style lang="postcss">
</style>
