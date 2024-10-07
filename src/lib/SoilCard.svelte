<!-- SoilCard.svelte -->
<script>
	import { createEventDispatcher } from "svelte";
	import Rive from "./Rive.svelte";

  export let soilType;
  export let data;
  const dispath = createEventDispatcher()

  export let selected = false


</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="soil-card" on:click={() => dispath("click")} class:selected>
  <img src={data.img} alt="">
  <div class="details">
    <div class="soil">
      <Rive url={data.rive} width="100%" height="100%" />
    </div>
    <h2>{soilType} soil</h2>
    <div class="characteristics">
      <!-- <h3>Characteristics</h3> -->
      <ul>
        {#each data.characteristics as characteristic}
          <li>{characteristic}</li>
        {/each}
      </ul>
    </div>
    
    {#if data.pros}
      <div class="pros">
        <h3>Pros</h3>
        <ul>
          {#each data.pros as pro}
            <li>{pro}</li>
          {/each}
        </ul>
      </div>
    {/if}
    
    {#if data.cons}
      <div class="cons">
        <h3>Cons</h3>
        <ul>
          {#each data.cons as con}
            <li>{con}</li>
          {/each}
        </ul>
      </div>
    {/if}
    
    <!-- <div class="irrigations">
      <h3>Irrigation Methods</h3>
      <ul>
        {#each data.irrigations as irrigation}
          <li>
            <strong>{irrigation.title}:</strong> {irrigation.description}
          </li>
        {/each}
      </ul>
    </div> -->
  </div>
</div>

<style>
  img {
    height: 150px;
    width: 100%;
    /* object-fit: cover !important; */
  }
  .soil-card {
    border: 1px solid #ccc;
    border-radius: 12px;
    
    /* margin: 16px; */
    background-color: white;
    max-width: 300px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgb(222, 222, 222);
    outline: 4px solid transparent;
    transition: all 0.1s ease-in-out;
    scale: 1;
    user-select: none;

  }
  .selected {
    outline: 4px solid var(--accent);
    border: 1px solid var(--accent);
  }
  .details {
    padding: 16px;
  }
  .soil-card:hover {
    background-color: hsl(var(--primary-t) / 0.1);
    cursor: pointer;
  }
  .soil-card:active {
    scale: 0.98;
    background-color: hsl(var(--primary-t) / 0.2);
  }
  .soil {
    position: absolute;
    top: 90px;
    right: 10px;
    width: 30%;
    height: 20%;
    /* border: 1px solid red; */
  }

  .soil-card h2 {
    
    font-weight: bold;
    
    text-transform: capitalize;
  }
  h3 {
    margin-top: 10px;
  }

  /* Apply to all list items within .soil-card */
.soil-card li {
  position: relative;
  padding-left: 20px; /* Add space for the circle */
  list-style-type: none; /* Remove default list styling */
}

/* Create the circle using ::before */
.soil-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  /* transform: translateY(-50%); */
  width: 8px;
  height: 8px;

  border-radius: 50%; /* Makes it a circle */
}
.characteristics li {

  padding-left: 0px; 
}
.cons li::before {
  background-color: #b95555; /* Circle color */
}
.pros li::before {
  background-color: #4caf50; /* Circle color */
}
</style>
