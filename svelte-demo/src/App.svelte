<script>
  import Post from "./lib/Post.svelte";
  let q = "";
  let posts = [];
  let filteredPosts = [];
  const url = "https://dummyjson.com/posts/";
  async function getPosts(url) {
    const response = await fetch(url);
    return response.json();
  }
  async function init() {
    const data = await getPosts(url);
    posts = data.posts;
    filteredPosts = posts;
    console.log(data);
  }

  function clickHandler() {
    filteredPosts = posts.filter(
      (item) => item.body.includes(q) || item.title.includes(q)
    );
  }

  init();
</script>

<main>
  <section>
    <input type="text" bind:value={q} />
    <button on:click={clickHandler}>Search</button>
  </section>
  {#each filteredPosts as post}
    <Post {post} />
    <!-- { JSON.stringify(post) } -->
  {/each}
</main>

<style>
  main {
    font-family: courier;
  }
</style>
