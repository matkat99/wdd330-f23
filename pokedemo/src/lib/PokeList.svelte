<script>
  import { onMount } from "svelte";
  import DropDown from "./DropDown.svelte";

  const baseUrl = "https://pokeapi.co/api/v2/";
  let typeList = [];
  let pokeList = [];
  let currentPokemon = {};

  async function init() {
    // get list of types
    const response = await fetch(baseUrl + "type");
    const types = await response.json();
    console.log(types);
    // reformat list of types
    typeList = types.results.map((item, index) => {
      return { label: item.name, value: index + 1 };
    });

    // build dropdown of types
  }

  async function changeHandler(event) {
    console.log(event.target.value);
    // figure out which pokemon type was selected
    const { value } = event.target;
    // get all pokemon of that type /type/1
    try {
      const response = await fetch(baseUrl + `type/${value}`);
      if (response.ok) {
        const data = await response.json();
        pokeList = data.pokemon;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
    // display a list of those pokemon.
  }

  async function handleClick(event) {
    console.log(event.target.dataset.url);
    try {
      const response = await fetch(event.target.dataset.url);
      if (response.ok) {
        const data = await response.json();
        currentPokemon = data;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  }
  onMount(init);
</script>

<DropDown on:change={changeHandler} list={typeList} />

<ul>
  {#each pokeList as item}
    <li on:click={handleClick} data-url={item.pokemon.url}>
      {item.pokemon.name}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
    height: 380px;
    overflow-y: scroll;
  }
</style>
