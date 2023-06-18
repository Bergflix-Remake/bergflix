<script lang="ts">
	import Info from '../../components/Hero/Info.svelte';
	import ButtonLink from '../../components/Link/ButtonLink.svelte';
	import Link from '../../components/Link/Link.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let propDisplay: 'form' | 'raw' = 'form';

	let components: {
		c: any;
		props: { [key: string]: any };
		slot?: string;
	}[] = [
		{
			c: Link,
			props: {
				href: '/funny',
				icon: 'user-3-fill',
				class: ''
			},
			slot: 'Funny Haha'
		},
		{
			c: ButtonLink,
			props: {
				href: '/funny',
				icon: 'mdi:heart',
				variant: 'variant-soft-primary',
				class: ''
			},
			slot: 'Funny Haha'
		},
		{
			c: Info,
			props: {
				/*
                	export let title: { text: string; image?: string };
	export let description: string;
	export let date: string;
	export let age: number;
	export let genre: string;
	export let type: MediaType;
	export let buttons: { text: string; to: string; icon?: string }[];
    */
				title: {
					text: 'Funny',
					image: ''
				},
				description:
					'Neque enim et praesentium vel et ut facere. Et illo tenetur adipisci facere ut nemo laboriosam. Ratione magnam repellendus repudiandae qui sequi. Veniam iure corporis velit est quia. Qui incidunt dolores a et illum et qui perferendis. Consectetur ex aspernatur distinctio et cum assumenda.',
				date: '2023-06-17',
				age: 18,
				genre: 'Action',
				type: 'movie',
				buttons: [],
				show: true
			},
			slot: ''
		}
	];
</script>

<section class="flex flex-wrap gap-10 p-10">
	{#each components as comp, i}
		<article
			class="flex flex-col p-5 rounded-token bg-surface-100-800-token ring-outline-token shadow-sm resize-x overflow-auto w-screen max-w-xl"
		>
			<div class="grid place-items-center p-5 bg-surface-50-900-token shadow-sm">
				<svelte:component this={comp.c} {...comp.props}>{comp.slot}</svelte:component>
			</div>
			<div class="flex flex-row justify-between my-5">
				<h3 class="h3">Props</h3>
				<RadioGroup>
					<RadioItem bind:group={propDisplay} name="justify" value={'form'}>Form</RadioItem>
					<RadioItem bind:group={propDisplay} name="justify" value={'raw'}>Raw</RadioItem>
				</RadioGroup>
			</div>
			{#if propDisplay == 'form'}
				{#each Object.keys(comp.props) as prop}
					{#if typeof comp.props[prop] == 'boolean'}
						<label class="flex items-center space-x-2 my-2">
							<input type="checkbox" class="checkbox" bind:checked={comp.props[prop]} />
							<p>{prop}</p>
						</label>
					{:else if typeof comp.props[prop] == 'object'}
						{#each Object.keys(comp.props[prop]) as subProp}
							<label class="label">
								<span>{prop}.{subProp}</span>
								<input type="text" id="" class="input" bind:value={comp.props[prop][subProp]} />
							</label>
						{/each}
					{:else if typeof comp.props[prop] == 'number'}
						<label class="label">
							<span>{prop}</span>
							<input type="number" id="" class="input" bind:value={comp.props[prop]} />
						</label>
					{:else}
						<label class="label">
							<span>{prop}</span>
							<input type="text" id="" class="input" bind:value={comp.props[prop]} />
						</label>
					{/if}
				{/each}
			{:else}
				<pre
					class="text-sm font-mono bg-surface-50-900-token p-5 rounded-token overflow-auto w-full">{JSON.stringify(
						comp.props,
						null,
						2
					)}</pre>
			{/if}
			{#if comp.slot}
				<label class="label">
					<span>slot</span>
					<input type="text" class="input" bind:value={comp.slot} />
				</label>
			{/if}
		</article>
	{/each}
</section>
