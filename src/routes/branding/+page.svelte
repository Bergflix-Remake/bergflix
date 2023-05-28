<script lang="ts">
	import { LightSwitch, TableOfContents, clipboard, toastStore } from '@skeletonlabs/skeleton';
	import Logo from '../../components/Logo.svelte';

	let devMode = false;
	let classPrefix = 'bg-';
	const colors: { name: string; color?: string; className?: { [key: string]: string } }[] = [
		{
			name: 'Schickes Rot',
			color: '#ff0230',
			className: {
				'bg-': 'bg-primary-500',
				'text-': 'text-primary-500'
			}
		},
		{
			name: 'Schickes Blau',
			color: '#0d00ff',
			className: {
				'bg-': 'bg-secondary-500',
				'text-': 'text-secondary-500'
			}
		},
		{
			name: 'Schickes Purpur',
			color: '#bb00ff',
			className: {
				'bg-': 'bg-tertiary-500',
				'text-': 'text-tertiary-500'
			}
		},
		{
			name: 'break'
		},
		{
			name: 'Sauberes Weiss',
			color: '#ffffff',
			className: {
				'bg-': 'bg-clean-white',
				'text-': 'text-clean-white'
			}
		},
		{
			name: 'Plattenbau',
			color: '#989898',
			className: {
				'bg-': 'bg-concrete-500',
				'text-': 'text-concrete-500'
			}
		},
		{
			name: 'Delorean',
			color: '#6b6b6b',
			className: {
				'bg-': 'bg-delorean-500',
				'text-': 'text-concrete-500'
			}
		},
		{
			name: 'Sauberes Dunkel',
			color: '#111111',
			className: {
				'bg-': 'bg-surface-500',
				'text-': 'text-surface-500'
			}
		},
		{
			name: 'Dunkelstes Dunkel',
			color: '#000000',
			className: {
				'bg-': 'bg-darkest-dark',
				'text-': 'text-darkest-dark'
			}
		},
		{
			name: 'break'
		},
		{
			name: 'Erfolg!',
			color: '#87e000',
			className: {
				'bg-': 'bg-success-500',
				'text-': 'text-success-500'
			}
		},
		{
			name: 'Warnung!',
			color: '#db840a',
			className: {
				'bg-': 'bg-warning-500',
				'text-': 'text-warning-500'
			}
		},
		{
			name: 'Fehler!',
			color: '#db0000',
			className: {
				'bg-': 'bg-error-500',
				'text-': 'text-error-500'
			}
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

			<p class="text-surface-600-300-token italic mt-10">
				Developer?
				<label for="devmode">
					👉 <input
						class="checkbox mr-2"
						type="checkbox"
						bind:checked={devMode}
						name="devmode"
						id="devmode"
					/>
					Klassennamen anzeigen</label
				>
				{#if devMode}
					<div class="flex flex-row justify-between">
						<label for="classPrefix">
							Klassen Prefix
							<input
								class="input"
								type="text"
								bind:value={classPrefix}
								name="classPrefix"
								id="classPrefix"
							/>
						</label>
						<LightSwitch />
					</div>
				{/if}
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
						{#if devMode}
							<p>
								<code class="code !text-primary-900-50-token">
									{#if classPrefix}.{/if}{item.className?.['bg-'].replace(
										'bg-',
										classPrefix
									)}{classPrefix.startsWith('jawohl') ? ' (!)' : ''}</code
								>
								<span
									class="cursor-pointer"
									use:clipboard={item.className?.['bg-'].replace('bg-', classPrefix)}
									on:click={showSuccessToast}
									on:keypress={showSuccessToast}>📋</span
								>
							</p>
						{/if}
					</figcaption>
					{#if classPrefix.startsWith('text-')}
						<div class="swatch {item.className?.['text-']}">
							<p>{item.name}</p>
						</div>
					{:else if classPrefix.startsWith('jawohl')}
						<div class="swatch {item.className?.['bg-']}">
							<img
								src="https://cdn.discordapp.com/emojis/1102957082019364936.webp?size=96&quality=lossless"
								alt="Jawohl!"
							/>
						</div>
					{:else}
						<div class="swatch {item.className?.['bg-']}" />
					{/if}
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
		@apply w-full aspect-square rounded-md mt-4 text-center grid place-items-center;
	}
</style>
