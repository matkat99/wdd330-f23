<script>
  import { fade, slide, scale } from "svelte/transition";
  import { pokeStore } from "./pokeStore";
</script>

{#if $pokeStore}
  {#key $pokeStore}
    <section
      class="details"
      transition:scale={{
        delay: 250,
        duration: 600
      }}
    >
      <h2>{$pokeStore.name}</h2>
      <img
        src={$pokeStore.sprites.other.home.front_default}
        alt={$pokeStore.name}
      />
    </section>
  {/key}
{/if}

<style>
  section {
    height: 0;
    /* transition: all 3.3s; */
  }
  img {
    max-height: 300px;
  }
</style>
