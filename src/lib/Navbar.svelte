<script>
	import Button1 from '$lib/Button1.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	const pages = [
		{ label: 'Moistor Estimate', path: '/estimator/' },
		// { label: 'Home', path: '/' },
		{ label: 'About', path: '/about-us/' },
		{ label: 'Services', path: '/services/' },
		{ label: 'Contact', path: '/contact/' }
	];
	$: selected = pages.find((p) => {
		return p.path.includes($page.url.pathname);
	}).label;

	$: console.log(selected);
</script>

<div id="navbar">
	<div class="nav-inner">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="left" on:click={() => goto('/home/')}>
			<img src="/logo.png" alt="" />
			<h2 class="title">SoilVantage</h2>
		</div>
		<div class="right">
			<div class="nav-btns font-bold">
        The Crop Dusters
				<!-- {#each pages as page}
					<Button1
						content={page.label}
						selected={selected == page.label}
						on:click={() => (selected = page.label)}
						on:click={() => goto(`${page.path}`)}
					/>
				{/each} -->
			</div>
		</div>
	</div>
</div>

<style>
	* {
		--width: 65%;
	}

	#navbar {
		/* border: 1px solid red; */
		padding: 20px 0px;

		position: sticky;
		top: 0;
		z-index: 4;
		background-color: var(--background);
		/* box-shadow: 0px 0px 5px black; */
	}
	.nav-inner > div {
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 4px;
		& img {
			height: 100%;
		}
	}
	.left {
		gap: 8px !important;

		&:hover {
			cursor: pointer;
		}
	}
	.nav-btns {
		display: flex;
		gap: 4px;
	}

	.nav-inner {
		width: var(--width);
		height: 60px;
		/* overflow: hidden; */
		position: relative;
		margin: auto;
		display: flex;
		gap: 4px;
		justify-content: space-between;
	}
	
	@media (max-width: 768px) {
		* {
			--width: 90%;
		}
	}
	@media (max-width: 1100px) {
		.nav-btns {
			display: none;
		}

	}
</style>
