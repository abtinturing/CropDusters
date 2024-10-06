<script lang="ts">
	import { onMount } from 'svelte';
	import * as rive from '@rive-app/canvas';

	export let url = '';
	export let width = '';
	export let height = '';
	onMount(() => {
		const r = new rive.Rive({
			src: '/leaf.riv',
			// OR the path to a discoverable and public Rive asset
			// src: '/public/example.riv',
			canvas: document.getElementById('canvas'),
			autoplay: true,
			// artboard: "Arboard", // Optional. If not supplied the default is selected
			stateMachines: 'State Machine 1',
			onLoad: () => {
				r.resizeDrawingSurfaceToCanvas();
			}
		});
	});
</script>

<div>
	<canvas id="canvas" {width} {height}></canvas>
</div>

<style>
	canvas {
		overflow: hidden;
	}
</style>
