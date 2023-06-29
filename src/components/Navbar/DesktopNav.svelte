<script lang="ts">
	import AccountPopup, { popupSettings } from './AccountPopup.svelte';

	import { popup, Avatar } from '@skeletonlabs/skeleton';
	import Logo from '../Logo.svelte';
	import NavLink from './NavLink.svelte';
	import SearchPopup from '../Search/Popup.svelte';
	import { navItems } from '$lib/config/navbar';
</script>

<nav
	class="md:flex hidden flex-row items-center p-5 w-full h-20 bg-gradient-to-b from-black to-transparent"
>
	<h1 class="h2">
		<Logo />
	</h1>
	<menu class="flex flex-row items-center space-x-3 ml-5">
		{#each navItems as item}
			<li>
				<NavLink href={item.href} icon={item.icon}>{item.name}</NavLink>
			</li>
		{/each}
	</menu>
	<div class="ml-auto flex flex-row gap-5 items-center">
		<SearchPopup />
		<div class="cursor-pointer" use:popup={popupSettings}>
			<Avatar initials="AB" />
		</div>
	</div>
</nav>

<AccountPopup />
