<script>
	import { onDestroy, onMount } from 'svelte';

	export let path;
	export let alt = '';
	export let width = '100%';
	export let height = '100%';
	export let animation = true;
	export let styles = '';
	let isLoading = true;
	export let loaded = false;
	let imageElement;
	onMount(() => {
		checkIfImageLoaded();
	});
	function checkIfImageLoaded() {
		if (imageElement.complete && imageElement.naturalHeight !== 0) {
			handleImageLoad();
		}
	}
	// Handler for the image load event
	function handleImageLoad() {
		isLoading = false;
	}
	$: loaded = !isLoading;
</script>

<div class="image-container" style="--width: {width}; --height: {height};">
	{#if isLoading}
		<div class="placeholder">
			{#if animation}
				<span class="shimmer"></span>
			{/if}
		</div>
	{/if}

	<img
		src={path}
		{alt}
		class="image"
		style={styles}
		on:load={handleImageLoad}
		on:error={handleImageLoad}
		bind:this={imageElement}
		loading="lazy"
	/>
</div>

<style>
	.image-container {
		position: relative;
		width: var(--width);
		height: var(--height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder {
		background-color: #323232;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius);
		overflow: hidden;
		position: absolute;
	}

	.shimmer {
		display: block;
		height: 100%;
		width: 100%;
		background: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;
	}

	.image {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius);
		object-fit: cover;
	}

	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}
</style>
