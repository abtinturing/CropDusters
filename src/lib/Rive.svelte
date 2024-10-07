<script lang="ts">
	import { onMount } from 'svelte';
	import * as rive from '@rive-app/canvas';

	export let url = '';
	export let width = '';
	export let height = '';
	onMount(() => {

		console.log({canvasEl})
		const r = new rive.Rive({
			src: url,
			// OR the path to a discoverable and public Rive asset
			// src: '/public/example.riv',
			canvas: canvasEl,
			autoplay: true,
			// artboard: "Arboard", // Optional. If not supplied the default is selected
			stateMachines: 'State Machine 1',
			onLoad: () => {
				r.resizeDrawingSurfaceToCanvas();
			}
		});
	});
	let canvasEl
</script>

<!-- <div> -->
	<canvas bind:this={canvasEl} id="canvas" {width} {height}></canvas>
<!-- </div> -->

<style>
	canvas {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
