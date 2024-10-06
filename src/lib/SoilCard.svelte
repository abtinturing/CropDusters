<!-- SoilCard.svelte -->
<script>
  export let soilType;
  export let data;


</script>

<div class="soil-card">
  <h2>{soilType}</h2>
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

<style>
  .soil-card {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 16px;
    /* margin: 16px; */
    background-color: white;
    max-width: 300px;
    
  }
  .soil-card:hover {
    background-color: hsl(var(--primary-t) / 0.2);
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
