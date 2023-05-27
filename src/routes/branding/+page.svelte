<script lang="ts">
	import { TableOfContents, clipboard, toastStore } from '@skeletonlabs/skeleton';
	import Logo from '../../components/Logo.svelte';

	let devmode = false;

	const colors = [
		{
			name: 'Schickes Rot',
			color: '#ff0230',
			classname: 'bg-primary-500'
		},
		{
			name: 'Schickes Blau',
			color: '#0d00ff',
			classname: 'bg-secondary-500'
		},
		{
			name: 'Schickes Purpur',
			color: '#00ff23',
			classname: 'bg-tertiary-500'
		},
		{
			name: 'break'
		},
		{
			name: 'Sauberes Weiss',
			color: '#ffffff',
			classname: 'bg-clean-white'
		},
		{
			name: 'Plattenbau',
			color: '#989898',
			classname: 'bg-concrete-500'
		},
		{
			name: 'Delorean',
			color: '#6b6b6b',
			classname: 'bg-delorean-500'
		},
		{
			name: 'Sauberes Dunkel',
			color: '#111111',
			classname: 'bg-surface-500'
		},
		{
			name: 'Dunkelstes Dunkel',
			color: '#000000',
			classname: 'bg-darkest-dark'
		},
		{
			name: 'break'
		},
		{
			name: 'Erfolg!',
			color: '#87e000',
			classname: 'bg-success-500'
		},
		{
			name: 'Warnung!',
			color: '#db840a',
			classname: 'bg-warning-500'
		},
		{
			name: 'Fehler!',
			color: '#db0000',
			classname: 'bg-error-500'
		},
		{
			name: 'break'
		}
	];

	const showSuccessToast = () => {
		toastStore.trigger({
			message: 'Kopiert!',
			background: 'variant-filled-success',
			timeout: 2000
		});
	};
</script>

<!-- Intro -->
<section class="p-5">
	<h2 data-toc-ignore class="h1 mb-10 heading">
		<Logo gradient>Branding</Logo>
	</h2>
	<div class="flex lg:flex-row-reverse flex-col">
		<TableOfContents label="Inhalt" class="w-max my-5" />
		<div class="flex flex-col">
			<h3 data-toc-ignore class="h3 italic text-primary-500 font-bold mb-3">
				Nichts offizielles, aber trotzdem wichtig.
			</h3>
			<p class="text-concrete-700 text-xl">
				<Logo /> ist kein angemeldetes Unternehmen, geschweige irgendeine offizielle Organisation. Dennoch
				haben wir für uns einen speziellen “Brand-Kodex” geschaffen welcher im verbund mit dem namen
				Bergflix möglichst beachtet werden sollte.
			</p>

			<p class="text-surface-300 italic mt-10">
				Developer?
				<label for="devmode">
					👉 <input
						class="checkbox mr-2"
						type="checkbox"
						bind:checked={devmode}
						name="devmode"
						id="devmode"
					/>
					Klassennamen anzeigen</label
				>
			</p>
		</div>
	</div>
</section>

<!-- Colors -->
<section class="p-5">
	<h3 class="h2 font-semibold mb-5">Farben</h3>
	<div class="flex flex-row flex-wrap gap-3 justify-center xl:justify-start">
		{#each colors as item}
			{#if item.name == 'break'}
				<div class="w-full" />
			{:else}
				<figure class="card p-3">
					<figcaption>
						<p class="h3">{item.name}</p>
						<p class="text-surface-700-200-token">
							{item.color}
							<span
								class="cursor-pointer"
								use:clipboard={item.color}
								on:click={showSuccessToast}
								on:keypress={showSuccessToast}>📋</span
							>
						</p>
						{#if devmode}
							<p>
								<code class="code !text-primary-900-50-token">.{item.classname}</code>
								<span
									class="cursor-pointer"
									use:clipboard={item.classname}
									on:click={showSuccessToast}
									on:keypress={showSuccessToast}>📋</span
								>
							</p>
						{/if}
					</figcaption>
					<div class="swatch {item.classname}" />
				</figure>
			{/if}
		{/each}
	</div>
</section>

<style lang="postcss">
	figure {
		@apply flex flex-col w-64;
	}

	.swatch {
		@apply w-full aspect-square rounded-md mt-4;
	}
</style>
