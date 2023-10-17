<script>
  import { postStore } from "../stores.js";

  let title = "";
  let body = "";
  async function postPost(post) {
    const options = {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch("http://localhost:3000/posts", options);
    console.log(response);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = { title, body };
    postPost(newPost);
    $postStore = [...$postStore, newPost];
    this.reset();
  }
</script>

<form on:submit={handleSubmit}>
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" bind:value={title} />
  </p>
  <p>
    <label for="body">Body</label>
    <textarea name="body" id="body" cols="30" rows="10" bind:value={body} />
  </p>
  <button>Add</button>
</form>
{body}
