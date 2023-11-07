<script>
  export let list;
  export let currentValue;
</script>

<select on:change value={currentValue}>
  <option value="">Pick an option...</option>
  {#each list as item}
    <option value={item.value}>{item.label}</option>
  {/each}
</select>

<style>
  select {
    width: 100%;
    font-size: 1em;
    padding: 0.6em 0;
  }
  option {
  }
</style>
