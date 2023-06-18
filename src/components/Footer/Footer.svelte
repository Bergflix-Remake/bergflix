<script lang="ts">
	import { t } from '$lib/translations';
	import Link from '../Link/Link.svelte';
	import Logo from '../Logo.svelte';
</script>

<footer class="w-full p-8 shadow-inner pb-20 md:pb-8 z-50 bg-surface-100-800-token">
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
					<Link href="https://bflx.de/github">{$t('common.footer.brand.contribute')}</Link>
				</li>
				<li>
					<Link icon="alert-fill" href="https://bflx.de/bug-report"
						>{$t('common.footer.brand.bug-report')}</Link
					>
				</li>
				<li>
					<Link icon="heart-fill" href="https://bflx.de/donate"
						>{$t('common.footer.brand.donate')}</Link
					>
				</li>
			</ul>
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">{$t('common.footer.legal.title')}</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="/legal#privacy">
						{$t('common.footer.legal.privacy-policy')}
					</Link>
				</li>
				<li>
					<Link href="/legal#imprint">
						{$t('common.footer.legal.imprint')}
					</Link>
				</li>
				<li>
					<Link href="/legal#terms">
						{$t('common.footer.legal.terms-of-service')}
					</Link>
				</li>
			</ul>
		</div>
		<div class="h-auto mt-8 sm:w-1/4 sm:mt-0">
			<div class="mb-2 font-bold text-delorean">{$t('common.footer.bergmann.title')}</div>
			<ul class="leading-normal list-reset">
				<li>
					<Link href="https://discord.gg/fromthefuture"
						>{$t('common.footer.bergmann.ftf-discord')}</Link
					>
				</li>
				<li>
					<Link href="https://www.patreon.com/herrbergmann"
						>{$t('common.footer.bergmann.patreon')}</Link
					>
				</li>
			</ul>
		</div>
	</div>
</footer>
