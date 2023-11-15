<script>
  export let list;
</script>

<select on:change>
  <option value="">Choose an option...</option>
  {#each list as item}
    <option value={item.value}>{item.label}</option>
  {/each}
</select>
