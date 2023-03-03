<script>
	import { page } from '$app/stores';
	import Logo from '../Logo.svelte';
	import NavLink from './NavLink.svelte';
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<header>
	<nav>
		<Logo />
		<ul>
			{#each navItems as item}
				<li>
					<NavLink href={item.href}>{item.name}</NavLink>
				</li>
			{/each}
		</ul>
	</nav>
	<div id="spacer" class="h-20" />
</header>

<style lang="postcss">
	nav {
		@apply fixed flex flex-row items-center p-5 w-full bg-gradient-to-b from-black h-20 backdrop-blur-sm;
	}
	nav > ul {
		@apply flex flex-row items-center space-x-3 ml-5;
	}
</style>
