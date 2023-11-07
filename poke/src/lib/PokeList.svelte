<script>
  import Dropdown from "./Dropdown.svelte";
  import { pokeStore } from "./pokeStore.js";

  let pokemon = [];
  let typeData = [
    { value: "1", label: "normal" },
    { value: "2", label: "fighting" },
    { value: "3", label: "flying" },
    { value: "4", label: "poison" },
    { value: "5", label: "ground" }
  ];
  let listData = [];
  let currentType = "";
  let currentPokemon = {};

  function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function getPokemonDetails(url) {
    const data = await getJSON(url);
    console.log(data);
    $pokeStore = data;
  }
  async function pokemonFromApi() {
    const data = await getJSON(`https://pokeapi.co/api/v2/type/${currentType}`);
    console.log(data);
    pokemon = data.pokemon;
    // type = data.name;
  }
  async function handleTypeChange(e) {
    currentType = e.target.value;
    await pokemonFromApi();
    listData = pokemon.map((item) => ({
      value: item.pokemon.url,
      label: item.pokemon.name
    }));
  }
  function showDetails(e) {
    getPokemonDetails(e.target.value);
  }
</script>

<Dropdown
  list={typeData}
  on:change={handleTypeChange}
  bind:currentValue={currentType}
/>
<!-- <Dropdown
  list={listData}
  on:change={showDetails}
  bind:currentValue={currentPokemon}
/> -->

<ul class="list">
  {#each pokemon as poke}
    <li>
      <button on:click={() => getPokemonDetails(poke.pokemon.url)}
        >{poke.pokemon.name}</button
      >
    </li>
  {/each}
</ul>

<style>
  .list {
    display: flex;
    /* width: 95vw; */
    flex-flow: column;
    list-style-type: none;
    /* line-height: 1.5em; */
    padding: 0;
    height: 400px;
    overflow: scroll;
    margin: 0;
  }
  .animate {
    animation: grow 0.5s;
  }
  @keyframes grow {
    from {
      height: 0;
    }
    to {
      height: auto;
    }
  }
  button {
    border: 0;
    border-radius: 0;
    width: 100%;
  }

  .list li {
    /* flex: 0 0 8em; */
    text-align: center;
    border: 1px solid;
    background-color: azure;
  }
  .list button:hover {
    background-color: bisque;
    text-decoration: underline;
  }
</style>
