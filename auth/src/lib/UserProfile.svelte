<script>
  import { userStore } from "./stores.mjs";
  import { getUserProfile, setUserProfile } from "./supabaseClient.mjs";
  let profile = {};
  const userId = $userStore.user.id;
  async function init() {
    profile = await getUserProfile(userId);
    console.log(profile);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userProfile = {};
    userProfile.website = formData.get("website");
    userProfile.full_name = formData.get("full_name");
    setUserProfile(userProfile, userId);
  }
  init();
</script>

<h2>User Profile</h2>
<form on:submit={handleSubmit}>
  <p>
    <label for="website">Website</label>
    <input
      type="text"
      id="website"
      name="website"
      bind:value={profile.website}
    />
  </p>
  <p>
    <label for="full_name">Full Name</label>
    <input
      type="text"
      id="full_name"
      name="full_name"
      bind:value={profile.full_name}
    />
  </p>
  <button type="submit">Submit</button>
</form>
