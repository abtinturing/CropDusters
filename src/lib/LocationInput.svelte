<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { MapPin } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { debounceAsync } from './urlUtils';
	async function fetchLocation(text) {
		const response = await fetch(`/api/location-by-text?text=${text}`);
		const data = await response.json();
		return data;
	}
	function extractAddress(addressComponents) {
		let address = {
			street: '',
			city: '',
			province: '',
			country: ''
		};

		addressComponents.forEach((component) => {
			if (component.types.includes('street_number')) {
				address.street += component.long_name + ' ';
			}
			if (component.types.includes('route')) {
				address.street += component.long_name;
			}
			if (component.types.includes('locality')) {
				address.city = component.long_name;
			}
			if (component.types.includes('administrative_area_level_1')) {
				address.province = component.short_name ?? component.long_name;
			}
			if (component.types.includes('country')) {
				address.country = component.long_name;
			}
		});

		return address;
	}

	async function fetchLocationDetails(id) {
		const response = await fetch(`/api/place-details?id=${id}`);
		const data = await response.json();
		return data.result;
	}
	function extractAddressInfo(address) {
		// Split the address by commas
		const parts = address.split(',').map((part) => part.trim());

		// Initialize placeholders for address components
		let streetAddress = null;
		let city = null;
		let province = null;
		let postalCode = null;
		let country = null;

		// Regex patterns for postal code (Canadian), province (two-letter abbreviation)
		const postalCodePattern = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
		const provincePattern = /\b(?:AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)\b/;

		// Determine components based on length of parts
		if (parts.length === 1) {
			city = parts[0];
		} else if (parts.length === 2) {
			city = parts[0];
			province = parts[1];
		} else if (parts.length === 3) {
			city = parts[0];
			province = parts[1];
			country = parts[2];
		} else {
			// Assuming the format: street address, city, province postal code, country
			streetAddress = parts[0];
			city = parts[1];

			// Identify postal code and province
			const postalMatch = postalCodePattern.exec(parts[2]);
			if (postalMatch) {
				postalCode = postalMatch[0];
				const provinceMatch = provincePattern.exec(parts[2]);
				if (provinceMatch) {
					province = provinceMatch[0];
				}
			} else {
				province = parts[2];
			}

			// Country is usually the last part
			country = parts[3];
		}

		return {
			streetAddress,
			city,
			province,
			postalCode,
			country
		};
	}
	function getLngAndLat(candidate) {
		const { geometry } = candidate;
		return geometry.location;
	}
	async function processCandidates(candidates: any[]) {
		const processed = [];
		for (const c of candidates) {
			const { place_id, name, formatted_address } = c;
			const { address_components, icon } = await fetchLocationDetails(place_id);

			const add = extractAddress(address_components);
			console.log({ c, address_components });
			const { lng, lat } = getLngAndLat(c);
			processed.push({
				lng,
				lat,
				icon,
				...add,
				place_id,
				name,
				formatted_address
			});
		}
		return processed;
	}
	async function search(text) {
		if (!text) {
			candidates = [];
			return;
		}
		const data = await fetchLocation(text);
		const processed = await processCandidates(data.candidates || []);

		candidates = processed;
		selected = false;
		console.warn(candidates);
		// const add = extractAddressInfo(candidates[0]?.formatted_address);
		// console.log({ add });
	}
	const debouncedSearch = debounceAsync(search, 100);
	const temp = ['milt'];
	// onMount(async () => {
	// 	currText = 'milton library';
	// 	await debouncedSearch(currText);
  //   selectCandidate(candidates[0])
	// });
	let currText = '';
	export let selected = false;

	export let candidates = [];
	function selectCandidate(candidate) {
		currText = candidate.formatted_address;
		selected = candidate;
	}
  
</script>

<!-- <Input type="text" placeholder="Enter location"> </Input> -->
<div class="cont">
	<div class="input-field">
		<span class="icon"><MapPin color="rgb(208, 185, 159)" /></span>

		<input
			bind:value={currText}
			type="text"
			class="bg-primary"
			placeholder="Enter location"
      class:result-exists={!!candidates.length && !selected}
			on:input={() => debouncedSearch(currText)}
		/>
	</div>
	{#if selected == false}
		<div class="drop">
			{#each candidates as c, i}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="location" class:first={i == 0} on:click={() => selectCandidate(c)}>
					<div class="top">
						<span class="name font-bold">{c.name}</span>
						<span class="city-country text-gray-500">{c.city}, {c.province}, {c.country}</span>
					</div>
					<span>{c.street}</span>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	* {
		--radius: 12px;
	}
	.drop {
		position: absolute;
		top: calc(100% - var(--radius));
		background-color: white;
		width: 100%;

		border-bottom-left-radius: var(--radius);
		border-bottom-right-radius: var(--radius);
		overflow: hidden;
	}
	.cont {
		width: 400px;
		position: relative;
	}
	.input-field {
		display: flex;
		position: relative;
		z-index: 2;
	}
	.icon {
		position: absolute;
		top: 50%;
		left: 10px;
		transform: translate(0%, -50%);
	}
	input {
		border-radius: var(--radius);
		padding: 12px;
		width: 100%;
		border: 4px solid var(--primary);
		outline: none;
		color: white;
		padding-left: 40px;
		/* background-color: var(--secondary); */
	}
	input::placeholder {
		color: rgb(217, 186, 143);
	}
	input.result-exists:focus {
		/* background-color: red; */
		border: 4px solid rgb(255, 255, 255);
	}
	.location {
		display: flex;
		flex-direction: column;
		padding: 12px;
		/* user-select: none; */
		transition: all 0.1s ease-in-out;
		scale: 1;
		&:hover {
			background-color: hsl(var(--primary-t) / 0.1);
			cursor: pointer;
		}
		&:active {
			background-color: hsl(var(--primary-t) / 0.2);
			/* scale: 0.98; */
		}
		& .top {
			display: flex;
			justify-content: space-between;

			& .name {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			& .city-country {
				white-space: nowrap;
			}
		}

		&.first {
			padding-top: calc(12px + var(--radius));
		}
	}
</style>
