<script>
  import PokeDetails from "./lib/PokeDetails.svelte";
  import PokeList from "./lib/PokeList.svelte";
</script>

<h1>PokeDemo</h1>

<main>
  <section class="listbox">
    <PokeList />
  </section>
  <section class="detailsbox">
    <!-- <button id="back" on:click={hideDetails}>&lt;-Back</button> -->
    <PokeDetails />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 200px auto;
    height: 400px;
    gap: 1em;
  }

  .listbox {
    border: 2px solid;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(250, 250, 250, 0.7);
  }
  .detailsbox {
    min-width: 50vw;
    padding: 1em;
    text-align: center;
    border: 2px solid;
    border-radius: 10px;
    transition: all 0.3s;
    height: 100%;
    background-color: rgba(250, 250, 250, 0.7);
  }
</style>
