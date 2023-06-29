<script lang="ts">
	import { navItems } from '$lib/config/navbar';
	import AccountPopup from './AccountPopup.svelte';
	import NavLink from './NavLink.svelte';
</script>

<nav class="flex md:hidden w-full bg-gradient-to-t from-black to-transparent">
	<menu class="flex flex-row justify-around items-center w-full p-5 relative">
		{#each navItems as item}
			<li>
				<NavLink href={item.href} icon={item.icon}>{item.name}</NavLink>
			</li>
		{/each}
		<li>
			<NavLink href="/search" icon="search-3-line">Search</NavLink>
		</li>
		<li>
			<NavLink href="/account" icon="user-3-fill">Account</NavLink>
		</li>
	</menu>
</nav>

<AccountPopup />
