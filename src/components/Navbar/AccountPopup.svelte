<script context="module" lang="ts">
	export const popupSettings: PopupSettings = {
		event: 'click',
		target: 'userPopup'
	};
</script>

<script lang="ts">
	import {
		toastStore,
		type PopupSettings,
		type ModalSettings,
		modalStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';

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

<div data-popup="userPopup" class="userPopup card hidden pointer-events-none">
	<div class="flex flex-row justify-between">
		<p class="text-delorean-600">Welcome, Guest!</p>
		<LightSwitch />
	</div>
	<button type="button" class="btn variant-ghost-primary" on:click={showToast}>Show Toast</button>
	<button type="button" class="btn variant-filled-primary" on:click={showModal}>Show Modal</button>
</div>

<style lang="postcss">
	.userPopup {
		@apply w-64 p-5 rounded-lg !flex flex-col space-y-3 opacity-0;
	}
</style>
