<template>
  <div class="container-fluid py-5">
    <img src="./hero.jpg" alt="hero" class="hero" />
    <h1 class="display-5 fw-bold">Welcome to jobmart</h1>
    <router-link to="/sign-up" class="btn btn-secondary btn-lg" type="button"
      >Sign up</router-link
    >
    <router-link to="/log-in" class="btn btn-warning btn-lg m-2" type="button"
      >Login</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
.hero {
  width: 350px;
}
</style>