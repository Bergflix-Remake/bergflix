<script lang="ts">
	interface Props {
		image: string;
		title: string;
		description: string;
		link: string;
	}
	export let props: Props;
	const { image, title, description, link } = props;
</script>

<section class="h-screen w-full bg-red-500">
	<div class="h-full w-full bg-cover bg-center" style="background-image: url({image})">
		<div class="h-full w-full bg-black bg-opacity-50">
			<div class="h-full w-full flex flex-col justify-center items-center">
				<h1 class="text-4xl text-white font-bold">{title}</h1>
				<p class="text-xl text-white">{description}</p>
				<a href={link} class="text-white font-bold text-lg">Learn More</a>
			</div>
		</div>
	</div>
</section>
