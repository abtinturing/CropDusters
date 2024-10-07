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
	const currentDate = new Date();
	const currentMonthNumber = currentDate.getMonth();

  export let selected ={ value: currentMonthNumber, label: months[currentMonthNumber] }
</script>

<Select.Root bind:selected={selected}>
	<Select.Trigger class="w-[140px] h-[56px] bg-primary text-white" >
		<Select.Value placeholder="Month" />
	</Select.Trigger>
	<Select.Content>
		{#each months as month, i}
			<Select.Item class="!hover:text-white" value={i}>{month}</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
