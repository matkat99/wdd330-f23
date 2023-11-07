<script>
  import { onMount } from "svelte";

  const baseUrl = "https://pokeapi.co/api/v2/";
  let typeList;
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

  onMount(init);
</script>

List
