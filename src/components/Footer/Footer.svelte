<script lang="ts">
	import Link from '../Link/Link.svelte';
	import Logo from '../Logo.svelte';
</script>

<footer class="w-full p-8 shadow-[35px_35px_60px_15px_rgba(0,0,0,0.3)] pb-20 md:pb-8">
	<div class="mb-4 sm:flex">
		<div
			class="h-auto text-3xl text-center sm:w-1/12 sm:text-sm md:text-base lg:text-lg xl:text-2xl"
		>
			<Logo />
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">Social Media</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="https://bflx.de/instagram">Instagram</Link>
				</li>
				<li>
					<Link href="https://bflx.de/discord">Discord</Link>
				</li>
				<li>
					<Link href="https://bflx.de/twitter">Twitter</Link>
				</li>
			</ul>
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">
				<Logo>Brand</Logo>
			</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="https://bflx.de/discord">Mithelfen</Link>
				</li>
				<li>
					<Link icon="alert-fill" href="https://bflx.de/bug-report">Fehler Melden</Link>
				</li>
			</ul>
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">Rechtliches & Hilfe</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="/legal#privacy">
						Datenschutz<span class="hidden md:inline">erklärung</span>
					</Link>
				</li>
				<li>
					<Link href="/legal#imprint">Impressum</Link>
				</li>
				<li>
					<Link href="/legal#terms">Benutzungsbedingungen</Link>
				</li>
			</ul>
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">Mehr von "Herr Bergmann"</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="https://discord.gg/fromthefuture">Trete der “FTF”-Redaktion bei</Link>
				</li>
				<li>
					<Link href="https://www.patreon.com/herrbergmann">Unterstütze seine Projekte</Link>
				</li>
			</ul>
		</div>
	</div>
</footer>
