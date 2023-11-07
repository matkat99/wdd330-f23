<script>
  import PokeDetails from "./lib/PokeDetails.svelte";
  import PokeList from "./lib/PokeList.svelte";
</script>

<h1>PokeDemo</h1>
<main>
  <section class="listbox"><PokeList /></section>
  <section class="detailsbox"><PokeDetails /></section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 200px auto;
    min-height: 400px;
    gap: 1em;
  }
  .listbox {
    border: 2px solid;
    border-radius: 10px;
  }
  .detailsbox {
    border: 2px solid;
    border-radius: 10px;
    min-width: 50vw;
  }
</style>
