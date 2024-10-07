<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte';

  export let irrigations: any[]
</script>

<div class="container-b">
	<section class="section services">
		<ul class="services-list">
			{#each irrigations as irr, i}
				<li class:odd={i % 2 == 0}>
					<div class="placeholder">
						<Placeholder path={irr.img} />
					</div>
					<div class="info">
						<h3>{irr.title}</h3>
						<p>
							{irr.description}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.container-b {
		width: 100%;
		/* margin: 0 auto; */
		/* padding: 2rem; */
		/* max-width: 76ch; */
	}

	.section {
		/* margin: auto; */
		margin-bottom: 2rem;
		/* max-width: 76ch; */
	}

	.section h2 {
		font-size: 2rem;
		color: #333;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.section p {
		line-height: 1.6;
		font-size: 1.1rem;
		color: #555;
	}

	.services-list {
		list-style: none;
		padding: 0;
		/* border: 1px solid red; */
		width: 100%;
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 6px;
		/* min-width: 70ch; */
		flex: 1;
		max-width: 70ch;
	}
	.odd {
		direction: rtl;
	}
	.services-list li {
		margin-bottom: 1.5rem;
		display: flex;
		/* flex-direction: row; */
		gap: 36px;

		/* border: 1px solid red; */
		height: 300px;

		& .placeholder {
			border-radius: 16px;
			flex: 1;
			aspect-ratio: 16/9;
			overflow: hidden;
			/* border: 1px solid red; */
		}
		& h3 {
			margin-top: 12px;
		}
	}
	@media (max-width: 1216px) {
		.services-list li {
			flex-direction: column;
			height: auto;
			gap: 6px;
			direction: ltr !important;
		}
	}
</style>
