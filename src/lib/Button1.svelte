<script lang="ts">
	export let content;
	export let selected = false;
	export let style: 'transparent' | 'filled' = 'transparent';
	export let icon = null
	export let shadow = false
</script>

<button class="button2 {style}" class:shadow class:selected {...$$restProps} on:click>
	{#if icon}
		<svelte:component this={icon}/>
	{/if}
	{content}
</button>

<style>
	.button2 {
		display: inline-block;
		transition: all 0.2s ease-in;
		position: relative;
		overflow: hidden;
		z-index: 1;
		width: fit-content;

		display: flex;
		align-items: center;
		gap: 8px;
		
		padding: 0.7em 1.7em;
		cursor: pointer;
		font-size: 18px;
		border-radius: 0.5em;

		
	}
	.button2.shadow {
		box-shadow: 0px 0px 5px #2525257e;
	}
	.button2.transparent {
		background: transparent;
		border: 1px solid transparent;
    color: #090909;
		--bg: var(--primary);
    --text: white
	}
	.button2.filled {
		background: var(--primary);
		border: 1px solid var(--primary);
    color: white;
		--bg: var(--accent);
    --text: white
	}

	.button2:active {
		color: #666;
	}

	.button2:before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%) scaleY(1) scaleX(1.25);
		top: 100%;
		width: 140%;
		height: 180%;
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 50%;
		display: block;
		transition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
		z-index: -1;
	}

	.button2:after {
		content: '';
		position: absolute;
		left: 55%;
		transform: translateX(-50%) scaleY(1) scaleX(1.45);
		top: 180%;
		width: 160%;
		height: 190%;
		background-color: var(--bg);
		border-radius: 50%;
		display: block;
		transition: all 0.3s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
		z-index: -1;
	}

	.button2:hover,
	.button2.selected {
		color: var(--text);
		border: 1px solid var(--bg);
	}

	.button2:hover:before,
	.button2.selected:before {
		top: -35%;
		background-color: var(--bg);
		transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
	}

	.button2:hover:after,
	.button2.selected:after {
		top: -45%;
		background-color: var(--bg);
		transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
	}
</style>
