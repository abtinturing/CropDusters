<script>
	import LightSwitch from '$lib/LightSwitch.svelte';
	import { Button } from '$lib/components/ui/button';
	import Link from '$lib/Link.svelte';
	import LocationInput from '$lib/LocationInput.svelte';
	import SoilCard from '$lib/SoilCard.svelte';
	import Rive from '$lib/Rive.svelte';
	import Months from '$lib/Months.svelte';
	import { soilTypes } from '$lib/soil';
	import TimedProgress from '$lib/TimedProgress.svelte';
	import Placeholder from '$lib/Placeholder.svelte';
	import Button1 from '$lib/Button1.svelte';
	import { goto } from '$app/navigation';
	import Hero from '$lib/Hero.svelte';
	import Irrigations from '$lib/Irrigations.svelte';
	import { toast } from 'svelte-sonner';
	import { scrollToMiddle, scrollToTopMiddle } from '$lib/pageUtils';

	function log(location, month) {
		predictedData = null;
		console.error({ location, month });
	}
	function calculateChunks(lat, lng) {
		return {
			latChunk: Math.floor((lat + 90) / 0.25),
			lngChunk: Math.floor((lng + 180) / 0.25)
		};
	}
	let predicting = false;
	async function predict(lat, lng, month) {
		if (!lat || !lng) {
			return null;
		}
		predictedData = null;
		predicting = true;
		const { latChunk, lngChunk } = calculateChunks(lat, lng);
		console.log({ lat, lng, latChunk, lngChunk, month });
		// return
		const response = await fetch(
			`/api/predict?latChunk=${latChunk}&lngChunk=${lngChunk}&month=${month}`
		);
		const data = await response.json();
		console.log(data);
		predicting = false;
		predictedData = data.prediction[0];
	}
	let predictedData = null;
	let selected;
	let selectedMonth;
	$: log(selected, selectedMonth);

	let selectedSoil = null;
	// let imageLoaded = false;
</script>

<div class="cont">
	<Hero />
	<!-- <img class="background-img" src="/farm.jpg" alt=""> -->
	<div class="plant">
		<Rive width="100px" height="100px" url="/leaf.riv" />
	</div>
	<!-- <LightSwitch /> -->
	<!-- <h1>Crop Dusters</h1> -->
	<!-- <p>Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation</p> -->
	<div class="container-a">
		<h1 id="estimate">Soil Moisture Estimator</h1>
		<div class="btns">
			<Months bind:selected={selectedMonth} />
			<LocationInput bind:selected />
			<Button
				class="h-[56px] w-[140px]  text-lg text-black  {selected
					? 'bg-accent hover:bg-accent'
					: 'cursor-not-allowed bg-gray-400 text-gray-600 hover:bg-gray-400'}"
				on:click={() => {
					if (!selected) {
						return;
					}
					predict(selected.lat, selected.lng, selectedMonth.value);
				}}>Estimate</Button
			>
		</div>
		{#if predicting}
			<h3>
				Hang tight, we're analyzing NASA's datasets to estimate the moisture levels in the area
			</h3>
			<div class="progress">
				<TimedProgress duration="15" />
			</div>
		{/if}
		{#if predictedData}
			<div class="predicted">
				<h3>
					The soil moisture estimate in the selected area is <span class="text-accent"
						>{predictedData.toFixed()}%</span
					>.
				</h3>
			</div>
		{/if}

		<!-- {#each candidates as candidate}
				 <div class="location">
						<span class="font-bold">{candidate.name}</span>
						<span>{candidate.formatted_address}</span>
				 </div>
			{/each} -->
		<div class="irrigation">
			<h1>Irrigation Methods</h1>
			<h4>Please Select Your <span class="text-primary">Soil</span> Type:</h4>
			<div class="soil-cards">
				{#each Object.entries(soilTypes) as [soilType, data]}
					<SoilCard
						{soilType}
						{data}
						selected={selectedSoil == soilType}
						on:click={() => {
							selectedSoil = soilType;
							console.log({ soilType, data });
							requestAnimationFrame(() => {
								scrollToTopMiddle('irrigation');
							});
						}}
					/>
				{/each}
			</div>
			{#if selectedSoil}
				<div class="bottom" id="irrigation">
					<div class="irrigation-methods">
						<h2>Recommended irrigation methods for {selectedSoil} soil:</h2>
						<Irrigations irrigations={soilTypes[selectedSoil].irrigations} />
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.plant {
		width: 5%;
	}
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		padding: 16px;
	}
	.container-a {
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 20px;
		/* border: 1px solid red; */
	}
	.irrigation {
		display: flex;
		flex-direction: column;
		gap: 8px;
		/* width: 100%; */
	}
	.irrigation-methods {
		flex-grow: 0;
		width: 1247px;
		/* width: min-content; */
	}
	.soil-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 16px;
	}
	.btns {
		display: flex;
		gap: 8px;
		margin-inline: auto;
		width: 100%;
		z-index: 2;
	}
	.progress {
		width: 100%;
	}

	.irrigation h2 {
		margin-bottom: 20px;
	}
	h2 {
		/* font-size: 2em; */
		font-weight: bold;
		margin-top: 40px;

		line-height: 1em;
	}
	.irrigation {
		margin-top: 80px;
	}
	.irrigation h1 {
		/* font-size: 2em; */
		font-weight: bold;
		margin-top: 40px;

		line-height: 1em;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
	}
</style>
