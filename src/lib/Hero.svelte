<script>
	import Placeholder from '$lib/Placeholder.svelte';
	import Button1 from '$lib/Button1.svelte';
	import { goto } from '$app/navigation';
	import { scrollToMiddle } from './pageUtils';
	let imageLoaded = false;


</script>

<div class="image-container" class:loaded={imageLoaded}>
	<Placeholder path="/farm.jpg" bind:loaded={imageLoaded} />
	<div class="overlay"></div>
	<div class="text">
		<h1>Master Your Soil, Master Your Water</h1>
		<h3>Using NASA's insights to ensure every drop and every acre counts.</h3>

		<div class="cta-btns">
			<Button1
				content="Estimate Soil Moisture"
				style="filled"
				shadow={true}
				on:click={() => scrollToMiddle("estimate")}
			/>
		</div>
	</div>
</div>

<style>
	.image-container {
		border-radius: 18px;
		overflow: hidden;
		position: relative;

		height: 700px;
		margin-bottom: 20px;
	}
	.image-container.loaded {
		box-shadow: 0px 0px 15px black;
	}
	.overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.289);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.text {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		color: white;
		padding: 40px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		justify-content: center;
	}
	.cta-btns {
		margin-top: 6px;
		display: flex;
		gap: 6px;
	}
	h1 {
		font-weight: bold;
		font-size: 3.5em;
		line-height: 1em;
	}

	h3 {
		font-weight: bold;
		font-size: 2em;
		margin-top: 12px;
		margin-bottom: 8px;
	}
</style>
