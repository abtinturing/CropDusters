<script>
  import { onMount } from 'svelte';
  import { Progress } from "$lib/components/ui/progress";

  let progress = 0;
  let interval;
  export let duration
  
  onMount(() => {
    const target = 80; // Progress target to start slowing down
    const intervalTime = 100; // Interval in milliseconds
    const totalIntervals = (duration * 1000) / intervalTime; // Total intervals to reach 80%
    const increment = target / totalIntervals; // Amount to increment per interval

    interval = setInterval(() => {
      if (progress < target) {
        progress += increment; // Increase speed when under 80%
      } else if (progress < 99) {
        progress += 0.1; // Slow down after 80%
      }

      if (progress >= 99) {
        clearInterval(interval); // Stop updating after a certain point
      }
    }, intervalTime);
  });
</script>

<Progress value={progress} />
