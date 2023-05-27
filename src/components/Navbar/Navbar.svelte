<script lang="ts">
	import {
		popup,
		toastStore,
		type PopupSettings,
		type ModalSettings,
		modalStore,
		LightSwitch,
		Avatar
	} from '@skeletonlabs/skeleton';
	import Logo from '../Logo.svelte';
	import NavLink from './NavLink.svelte';
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];

	const popupSettings: PopupSettings = {
		event: 'click',
		target: 'userPopup'
	};

	const showToast = () =>
		toastStore.trigger({
			message: 'Hello, World!',
			background: 'variant-filled-primary'
		});

	const prompt: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Enter Name',
		body: 'Provide your first name in the field below.',
		// Populates the input value and attributes
		value: 'Skeleton',
		valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
		// Returns the updated response value
		response: (r: string) => console.log('response:', r)
	};
	const showModal = () => modalStore.trigger(prompt);
</script>

<nav>
	<h1 class="h2">
		<Logo />
	</h1>
	<ul>
		{#each navItems as item}
			<li>
				<NavLink href={item.href}>{item.name}</NavLink>
			</li>
		{/each}
	</ul>
	<div class="ml-auto cursor-pointer" use:popup={popupSettings}>
		<Avatar initials="AB" />
	</div>
</nav>

<div data-popup="userPopup" class="userPopup card hidden pointer-events-none">
	<div class="flex flex-row justify-between">
		<p class="text-delorean-600">Welcome, Guest!</p>
		<LightSwitch />
	</div>
	<button type="button" class="btn variant-ghost-primary" on:click={showToast}>Show Toast</button>
	<button type="button" class="btn variant-filled-primary" on:click={showModal}>Show Modal</button>
</div>

<style lang="postcss">
	nav {
		@apply flex flex-row items-center p-5 w-full h-20 backdrop-blur-sm shadow-lg;
	}
	nav > ul {
		@apply flex flex-row items-center space-x-3 ml-5;
	}

	.userPopup {
		@apply w-64 p-5 rounded-lg !flex flex-col space-y-3 opacity-0;
	}
</style>
