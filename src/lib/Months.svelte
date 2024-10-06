<script>
	import * as Select from '$lib/components/ui/select';
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
  export let selected ={ value: 0, label: months[0] }
</script>

<Select.Root bind:selected={selected}>
	<Select.Trigger class="w-[180px] h-[56px] bg-primary text-white" >
		<Select.Value placeholder="Month" />
	</Select.Trigger>
	<Select.Content>
		{#each months as month, i}
			<Select.Item class="!hover:text-white" value={i}>{month}</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
