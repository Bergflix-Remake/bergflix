<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
	import NavLink from './NavLink.svelte';
</script>

<Meta title="Components/Navbar" component={Navbar} />

<Template let:args>
	<Navbar {...args}>
		<NavLink href="#">Home</NavLink>
		<NavLink href="#">About</NavLink>
		<NavLink href="#">Contact</NavLink>
	</Navbar>
</Template>

<Story name="Default" args={{}} />
