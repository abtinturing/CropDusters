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

	function log(location, month) {
      predictedData = null
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
      predictedData = null
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
      predictedData = data.prediction[0]
	}
   let predictedData = null
	let selected;
	let selectedMonth;
	$: log(selected, selectedMonth);
</script>

<div class="cont">
   <!-- <img class="background-img" src="/farm.jpg" alt=""> -->
	<Rive width="100px" height="100px"/>
	<!-- <LightSwitch /> -->
	<!-- <h1>Crop Dusters</h1> -->
	<!-- <p>Visit <Link href="https://kit.svelte.dev">kit.svelte.dev</Link> to read the documentation</p> -->
    <h1>Soil Moisture Estimator</h1>
	<div class="btns">
		<Months bind:selected={selectedMonth} />
		<LocationInput bind:selected />
		<Button
			class="h-[56px]"
			on:click={() => predict(selected.lat, selected.lng, selectedMonth.value)}>Estimate</Button
		>
	</div>
	{#if predicting}
		<div class="progress">
			<TimedProgress duration="15" />
		</div>
	{/if}
   {#if predictedData}
      <div class="predicted">
         <h2>{predictedData.toFixed()}%</h2>
      </div>
   {/if}

	<!-- {#each candidates as candidate}
      <div class="location">
         <span class="font-bold">{candidate.name}</span>
         <span>{candidate.formatted_address}</span>
      </div>
   {/each} -->
	<div class="soil-cards">
		{#each Object.entries(soilTypes) as [soilType, data]}
			<SoilCard {soilType} {data} />
		{/each}
	</div>
</div>

<style>
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		height: 100vh;
		/* border: 1px solid red; */
		padding: 16px;
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
	}
	.progress {
		width: 700px;
	}
   .background-img {
      position: absolute;
      filter: blur(20px);
      z-index: -1;
   }
</style>
