<script>
  import { onMount } from "svelte";
  import Login from "./lib/Login.svelte";
  import { userStore, route } from "./lib/stores.mjs";
  import { checkLogin } from "./lib/auth.mjs";
  import Navbar from "./lib/Navbar.svelte";
  import UserProfile from "./lib/UserProfile.svelte";

  async function init() {
    await checkLogin();
  }

  window.addEventListener("popstate", () => {
    if (document.location.hash == "#profile" && !$userStore.isLoggedIn) {
      console.log($userStore);
      document.location.hash = "#login";
    } else $route = document.location.hash;
  });

  onMount(init);
</script>

<header>
  <h1>Supabase Demo</h1>
  <Navbar />
</header>
<main>
  <div class="card">
    {#if $route === "#login"}
      <Login />
    {:else if $route === "#profile"}
      <UserProfile />
    {:else}
      <p>Home</p>
    {/if}
  </div>
</main>

<style>
</style>
