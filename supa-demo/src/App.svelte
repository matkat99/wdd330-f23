<script>
  import Login from "./lib/Login.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import UserProfile from "./lib/UserProfile.svelte";
  import { route } from "./lib/stores.mjs";

  window.addEventListener("popstate", () => {
    if (window.location.hash === "#profile") {
    } else {
      $route = window.location.hash;
    }
  });
</script>

<main>
  <Navbar />
  <h1>Sup demo</h1>

  <div class="card">
    {#if $route === "#login"}
      <Login />
    {:else if $route === "#profile"}
      <UserProfile />
    {:else}
      <h2>Welcome Home</h2>
    {/if}
  </div>
</main>

<style>
</style>
