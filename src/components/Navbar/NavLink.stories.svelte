<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import NavLink from './NavLink.svelte';
</script>

<Meta
	title="Components/Navbar/NavLink"
	component={NavLink}
	argTypes={{
		href: { control: 'text' },
		active: { control: 'boolean' }
	}}
/>

<Template let:args>
	<NavLink {...args}>NavLink</NavLink>
</Template>

<Story name="Inactive" args={{ href: '#', active: false }} />
<Story name="Active" args={{ href: '#', active: true }} />
